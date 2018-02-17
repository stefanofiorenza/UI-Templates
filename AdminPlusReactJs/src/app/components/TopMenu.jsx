import React from 'react';
import { connect } from 'react-redux';
import * as StateSelectors from '../state/StateSelectors.js'
import * as ActionTypes from '../actions'
import { hashHistory} from 'react-router';
import { Link} from 'react-router';

import TopMenuAnonymous from './profiles/TopMenuAnonymous.jsx'

export class TopMenu extends React.Component{

	constructor(props) {
		super(props);
		/*
		this.state={
			showMenu:false,
			role:ROLE_ANONYMOUS,
			username:ROLE_ANONYMOUS
		}*/
		this.handleSignout=this.handleSignout.bind(this);
	}

	handleSignout(){
		this.props.dispatch({	
			type:ActionTypes.SIGN_OUT_USER
		});
		hashHistory.push('/login');
	}

	componentWillReceiveProps (nextProps){
		this.setState(Object.assign({},this.state,{showMenu:nextProps.showMenu,role:nextProps.role,username:nextProps.username}));
	}

	render () {


		let navBar;
		{/*
		if (this.state.showMenu) {
			switch(this.state.role){
				case ROLE_ADMIN:
					navBar = <TopMenuAdmin username={this.state.username}/>;
					break;
				default:
					navBar = <TopMenuSupervisor username={this.state.username}/>;
			}

		} else {
			navBar = <TopMenuAnonymous username={this.state.username}/>;
		}*/}

		navBar = <TopMenuAnonymous username={'username'}/>;
		return (
			<div id="topMenuBar">				
				<div className="navbar main">
				<a href="/" className="appbrand"><span>IMT <span>Invoice Management Tool</span></span></a>
					{navBar}	
				</div>
			</div>
			);
	}
}
function mapStateToProps (state,ownProps) {	
	//let auth=StateSelectors.auth(state).toObject();	
	//let stateCategories=StateSelectors.categories(state).toObject()? state.categories : {init:false};
	//console.log(StateSelectors.authenticated(state));
	//console.log(StateSelectors.categoriesIsLoaded(state));
	
	//let newShowMenu =StateSelectors.auth_authenticated(state) && StateSelectors.categories_isLoaded(state);
	//let auth=StateSelectors.auth(state);
	//let newDisplay =(state.groupState.pageDisplay)?state.groupState.pageDisplay:{message:'',error:false,active:false};
	//return Object.assign({},state,{user:auth,categories:stateCategories}); 	
	//return {showMenu:newShowMenu, role:auth.role,username:auth.username};
	return {};
}

export default connect(mapStateToProps)(TopMenu)