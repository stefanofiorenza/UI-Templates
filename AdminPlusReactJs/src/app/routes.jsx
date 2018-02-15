import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainPage from './components/pages/MainPage.jsx';
import MasterPage from './components/MasterPage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';

import NewInvoicePage from './components/pages/NewInvoicePage.jsx';
import SearchInvoicesPage from './components/pages/SearchInvoicesPage.jsx';
import InvoiceDetailsPage from './components/pages/InvoiceDetailsPage.jsx';

import RequiresAuth from './components/pages/RequiresAuth.jsx';

export default(
  
 <Router history={hashHistory}> 
    <Route path="/" component={MasterPage}>
      {/*  <Route path="/" component={RequiresAuth(MasterPage)}>*/}

        <IndexRoute component={MainPage} />
        <Route path="login" component={LoginPage} />
        <Route path="newInvoice" component={NewInvoicePage} />
        <Route path="searchInvoices" component={SearchInvoicesPage} />
        <Route path="invoiceDetails" component={InvoiceDetailsPage} />
    </Route>
  </Router>
);
