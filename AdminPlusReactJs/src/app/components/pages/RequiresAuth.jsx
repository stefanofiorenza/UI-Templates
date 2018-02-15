import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import * as StateSelectors from '../../state/StateSelectors.js'

export default function(WrappedComponent) {

  class RequiresAuth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    //console.log(state);
    return { authenticated: StateSelectors.auth_authenticated(state) };
  }

  return connect(mapStateToProps)(RequiresAuth);
}