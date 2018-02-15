import React from 'react'
import Panel from '../panels/Panel.jsx'
import Button from '../widgets/Button.jsx'
import * as ActionTypes from '../../actions'
import { connect } from 'react-redux'
import {removeFromIdArray,findById,removeFromArray} from '../../utils/Commons.jsx'
import axios from 'axios';
import InputPrepend from '../widgets/InputPrepend.jsx'
import MessageDisplay from '../widgets/MessageDisplay.jsx'
import * as ApiUrls from '../../config/imt-config.js'

export class LogoutPage extends React.Component{

	
	constructor(props) {
		super(props);
		this.state={			
		}
		
		this.handleChange=this.handleChange.bind(this);
	
	}



	onDisplayClick(){
		this.props.dispatch({	
			type:ActionTypes.GROUP_CLOSE_DISPLAY
		});
	}

	handleChange(e){
		var { id, value} = e.target;
  		console.log("Values: id"+id+" Value "+value);

  		switch (id){
  			case 'grpName':  			
  			this.setState({...this.state,newGroupName: value});  			
  			break;

  			default:
  				throw "Unexpected control id. Found "+id;
  		}  		

	}


  	render() {

			return (
			<div>
				<h1>You have been successfully logged out	</h1>		
			</div>
			);
  }
}




/** extract from store's state tree, the state used by linked cmp */
function mapStateToProps (state,ownProps) {	
	//let newDisplay =(state.groupState.pageDisplay)?state.groupState.pageDisplay:{message:'',error:false,active:false};
	//return Object.assign({},state,{groups:state.groupState.groups,display:newDisplay}); 	
	return state;
}

export default connect(mapStateToProps)(LogoutPage)