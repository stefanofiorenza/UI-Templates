import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainPage from './components/pages/MainPage.jsx';
import MasterPage from './components/MasterPage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import ShowCasePage from './components/showcases/ShowCasePage.jsx';

import RequiresAuth from './components/pages/RequiresAuth.jsx';

export default(
  
 <Router history={hashHistory}> 
    <Route path="/" component={MasterPage}>
      {/*  <Route path="/" component={RequiresAuth(MasterPage)}>*/}

        <IndexRoute component={MainPage} />
        <Route path="login" component={LoginPage} />
        {/*  <Route path="newInvoice" component={NewInvoicePage} />*/}

        <Route path="dashboard" component={ShowCasePage} />
        <Route path="panels" component={ShowCasePage} />
        <Route path="tables" component={ShowCasePage} />
        <Route path="lists" component={ShowCasePage} />
        <Route path="forms" component={ShowCasePage} />
        <Route path="detail" component={ShowCasePage} />
        <Route path="search" component={ShowCasePage} />

    </Route>
  </Router>
);
