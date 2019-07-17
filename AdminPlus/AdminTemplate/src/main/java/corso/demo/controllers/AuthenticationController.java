package corso.demo.controllers;

import javax.servlet.http.HttpSession;

import lombok.extern.slf4j.Slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("auth")
@Slf4j
public class AuthenticationController {

	
	@RequestMapping(value="/login",method = RequestMethod.GET)
	public String login(){
		log.debug("execute login()");
		return "views/auth/login";
	}
	
	@RequestMapping(value="/logout",method = RequestMethod.GET)
	public String logout(HttpSession session){
		log.debug("execute logout()");
		SecurityContextHolder.clearContext();
		if(session!=null){
			session.invalidate();
		}		
		return "views/auth/logout";
	}
	
	
	@RequestMapping(value="/denied",method = RequestMethod.GET)
	public String denied(){
		log.debug("execute denied()");
		return "views/auth/denied";
	}
	
}
