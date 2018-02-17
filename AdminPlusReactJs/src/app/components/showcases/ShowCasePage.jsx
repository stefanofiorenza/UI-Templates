import React from 'react';
import { Link,hashHistory} from 'react-router';
import { connect } from 'react-redux'
import axios from 'axios';
import * as ApiUrls from '../../config/app-config.js'



export class ShowCasePage extends React.Component  {


	constructor(props) {
		super(props);
	}

	
	componentDidMount(){
		//console.log("MainPageOnMount: categories.loaded",this.props.categoriesLoaded);
		//console.log("MainPageOnMount: authenticated",this.props.authenticated);
		
	}	
	

	render() {

		const clearFixStyle={
			clear:'both'
		};


		return (
	        <div>			
			
			<div className="heading-buttons">
				{/*	<h2 className="glyphicons display"><i></i> Dashboard</h2> */}
				<br/>
				<br/>
				<div className="clearfix" style={clearFixStyle}>
					ShowCasePage
				</div>
			</div>


	</div>);
	}
}


function mapStateToProps (state,ownProps) {
	/*
	return {
		categoriesLoaded: StateSelectors.categories_isLoaded(state),
		authenticated: StateSelectors.auth_authenticated(state),
		role:StateSelectors.auth_role(state)
	};*/
	return {};
}

export default connect(mapStateToProps)(ShowCasePage)
