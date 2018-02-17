import React from 'react'
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';
import axios from 'axios';

import * as ApiUrls from '../../config/app-config.js'
import * as StateSelectors from '../../state/StateSelectors.js'
import * as ActionTypes from '../../actions'
import MessageDisplay from '../widgets/MessageDisplay.jsx';



export class LoginPage extends React.Component{

	

	constructor(props) {
		super(props);
		this.state={	
			username:'',
			password:'',
			message:''
		}		
		this.handleChange=this.handleChange.bind(this);
		this.login=this.login.bind(this);
		this.onDisplayClick=this.onDisplayClick.bind(this);
		
	
	}

	 componentWillReceiveProps(nextProps) {
      if (nextProps.authenticated) {
        hashHistory.push('/');
      }
/*
      else{
      	this.setState({...this.state,message:'You are currently Logged out'})
      }*/
    }

	handleChange(e){
		var { id, value} = e.target;
  		//console.log("Values: id"+id+" Value "+value);

  		switch (id){
  			case 'username':  			
  			this.setState({...this.state,username: value});  			
  			break;

			case 'password':  			
  			this.setState({...this.state,password: value});  			
  			break;

  			
  			default:
  				throw "Unexpected control id. Found "+id;
  		}  		

	}


 
	login(){
		this.props.dispatch({	
			type:ActionTypes.SIGN_IN_USER,
			payload:axios.get(ApiUrls.AUTHORIZE, {
				params: {user:this.state.username, pw:this.state.password}
			})
		});
	}

	onDisplayClick(){
		this.props.dispatch({	
			type:ActionTypes.AUTH_CLOSE_DISPLAY
		});
	}

  	render() {

  		const msgStyle={
  			paddingLeft:'40%'
  		}
		return (

			<div id="login">
				<MessageDisplay width={400} classNames="span5 pull-right" message={this.props.display.message} error={this.props.display.error} active={this.props.display.active} onClick={this.onDisplayClick} />											
				<form className="form-signin">			
				 		<div className="widget widget-4">
						<div className="widget-head">
							<h4 className="heading">Restricted area</h4>
						</div>
					</div>
					<h2 className="glyphicons unlock form-signin-heading"><i></i> Please sign in</h2>
					<div className="uniformjs">
						<input type="text" className="input-block-level" value={this.state.username} placeholder="domain username" id="username" name="username" onChange={this.handleChange}/> 
						<input type="password" className="input-block-level" value={this.state.password} placeholder="Password" id="password" name="password" onChange={this.handleChange}/>														
						{/*<label className="checkbox"><input type="checkbox" value="remember-me" />Remember me</label>*/}
					</div>
					<button className="btn btn-large btn-primary" type="button" onClick={this.login}>Sign in</button>					
				</form>			
				</div>	
		);
  }
}




/** extract from store's state tree, the state used by linked cmp */
function mapStateToProps (state,ownProps) {	
	return {};
	/*
	let newDisplay =StateSelectors.auth_display(state);	
	return Object.assign({},state,{display:newDisplay,authenticated:StateSelectors.auth_authenticated(state)});
	*/ 	
}

export default connect(mapStateToProps)(LoginPage)