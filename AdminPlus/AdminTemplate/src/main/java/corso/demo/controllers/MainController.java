package corso.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("main")
public class MainController {

	
	@RequestMapping(value="/home",method = RequestMethod.GET)
	public String login(){		
		return "views/main/home";
	}
	
}
