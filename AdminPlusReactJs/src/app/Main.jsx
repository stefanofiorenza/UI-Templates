import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore } from 'redux';
import { Router, hashHistory} from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import AppReducers from './reducers/AppReducers.jsx';
import routes from './routes.jsx';

import 'react-datepicker/dist/react-datepicker.css';


//import 'react-select/dist/react-select.css'
//import 'react-virtualized/styles.css'
//import 'react-virtualized-select/styles.css'


const middleware = applyMiddleware(promise(),thunk,logger());
const store = createStore(AppReducers,middleware);

ReactDOM.render(
	 <Provider store={store}>	 	 
	 	 <Router history={hashHistory} routes={routes} />	    
	 </Provider>	
	 ,document.getElementById('root'));

