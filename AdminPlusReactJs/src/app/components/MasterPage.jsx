import React from 'react';
import {connect} from 'react-redux'
import TopMenu from './TopMenu.jsx';
import SideMenu from './SideMenu.jsx';


export class MasterPage extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {

        var contentStyle = {
            marginTop: 10,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0
        }

        return (
            <div>
                <TopMenu />

                <div id="wrapper">
                    <SideMenu />

                    <div id="content">
                        {this.props.children}
                    </div>
                </div>

                <div id="footer" className="visible-desktop">
                    <div className="wrap"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    /*
     let allowUpdates =StateSelectors.auth_authenticated(state) && StateSelectors.categories_isLoaded(state);
     return Object.assign({},state,{allowUpdates:allowUpdates});
     */
    return {};
}
export default connect(mapStateToProps)(MasterPage)