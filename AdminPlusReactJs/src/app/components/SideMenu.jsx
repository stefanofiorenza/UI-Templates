
import React from 'react';
import ReactDOM  from "react-dom";
//import Immutable from "immutable";
//import $ from "jquery";
import { Link} from 'react-router';
import { connect } from 'react-redux';

export class SideMenu extends React.Component { 


	 constructor(props) {
    	super(props);
	}


	render() {

	 	/*

		 style={menuItemStyle}
		*/

        const menuItemStyle = {
            height: 20,
            paddingTop:10,
            paddingRight:0,
            paddingBottom:5,
            paddingLeft: 5
        };

		return (
		 <div id="menu" className="hidden-phone">
		 	
		 	{
		 	//(this.props.user.authenticated)?

				<div id="menuInner">
					<ul>
								<li className="heading"><span>&nbsp;</span></li>


								<li className="hasSubmenu active">
									<a data-toggle="collapse" className="glyphicons file" href="#invoices">
										<i></i><span><strong>Invoices</strong></span></a>
									<ul className="collapse" id="invoices">
										<li className="glyphicons file_import">
											<Link to="/newInvoice">
												<i></i><span>New Invoice</span>
											</Link>
										</li>

										<li className="glyphicons search">
											<Link to="/searchInvoices">
												<i></i><span>Invoice Search</span>
											</Link>
										</li>
										<li className="glyphicons barcode">
											<Link to="/invoiceDetails">
												<i></i><span>Invoice Details</span>
											</Link>
										</li>

									</ul>
								</li>

								<li className="hasSubmenu active">
									<a data-toggle="collapse" className="glyphicons group" href="#admin">
										<i></i><span><strong>Admin</strong></span></a>
									<ul className="collapse" id="admin">
										<li className="glyphicons cogwheels">
											<Link to="/admin">
												<i></i><span>Settings</span>
											</Link>
										</li>
									</ul>
								</li>

								<li className="hasSubmenu active">
									<a data-toggle="collapse" className="glyphicons charts" href="#statistics">
										<i></i><span><strong>Statistics</strong></span></a>
									<ul className="collapse" id="statistics">
										<li className="glyphicons globe" >
											<Link to="/">
												<i></i><span>Stats Figure1</span>
											</Link>
										</li>
										<li className="glyphicons coins" >
											<Link to="/">
												<i></i><span>Stats Figure 2 </span>
											</Link>
										</li>
										<li className="glyphicons pie_chart">
											<Link to="/">
												<i></i><span>Stats Figure 3 </span>
											</Link>
										</li>
									</ul>
								</li>

					</ul>
				</div>
			//:<span>&nbsp;</span>
			}
		</div>)
	}

}
function mapStateToProps (state,ownProps) {	
	//let auth=(state.auth)? state.auth :{username:'',authenticated:false}
	//let newDisplay =(state.groupState.pageDisplay)?state.groupState.pageDisplay:{message:'',error:false,active:false};
	//return Object.assign({},state,{user:auth}); 	
	return {};
}

export default connect(mapStateToProps)(SideMenu)