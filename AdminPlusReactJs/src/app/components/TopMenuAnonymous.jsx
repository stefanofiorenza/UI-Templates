import React from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions'
import { hashHistory} from 'react-router';
import { Link} from 'react-router';

export default class TopMenuAnonymous extends React.Component{

	constructor(props) {
		super(props);		
	}

	render () {
		return (
				<ul className="topnav pull-right">
				</ul>			
			);
	}
}

/*
function mapStateToProps (state,ownProps) {	
	let auth=(state.auth)? state.auth :{username:'',authenticated:false}
	//let newDisplay =(state.groupState.pageDisplay)?state.groupState.pageDisplay:{message:'',error:false,active:false};
	return Object.assign({},state,{user:auth}); 	
}

export default connect()(TopMenuAnonymous)
*/