
import React from 'react';
import ReactDOM  from "react-dom";
import { Link} from 'react-router';
import { connect } from 'react-redux';

export class SideMenu extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {

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
								<a data-toggle="collapse" className="glyphicons file" href="#ui_elements">
									<i></i><span><strong>UI Elements</strong></span>
								</a>

								<ul className="collapse" id="ui_elements">

									<li className="glyphicons adress_book">
										<Link to="/panels">
											<i></i><span>Panels</span>
										</Link>
									</li>

									<li className="glyphicons table">
										<Link to="/tables">
											<i></i><span>Tables</span>
										</Link>
									</li>
									<li className="glyphicons show_thumbnails_with_lines">
										<Link to="/lists">
											<i></i><span>Lists</span>
										</Link>
									</li>
									<li className="glyphicons barcode">
										<Link to="/forms">
											<i></i><span>Forms</span>
										</Link>
									</li>
								</ul>
							</li>

							<li className="hasSubmenu active">
								<a data-toggle="collapse" className="glyphicons group" href="#examples">
									<i></i><span><strong>Examples</strong></span></a>
								<ul className="collapse" id="examples">

									<li className="glyphicons home">
										<Link to="/dashboard">
											<i></i><span>Dashboard</span>
										</Link>
									</li>

									<li className="glyphicons cogwheels">
										<Link to="/detail">
											<i></i><span>UserDetail</span>
										</Link>
									</li>

									<li className="glyphicons cogwheels">
										<Link to="/search">
											<i></i><span>Search</span>
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