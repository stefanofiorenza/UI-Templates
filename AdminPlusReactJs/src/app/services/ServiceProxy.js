import React from 'react';
import axios from 'axios';
import * as ApiUrls from '../config/app-config.js'
import * as ActionTypes from '../actions/index.js'
//import * as Consts from '../utils/Consts.js'


/*
export function loadInvoicesData(dispatch){

    sendRequest(dispatch,
		ActionTypes.LOAD_LICENSES,
		ApiUrls.LOAD_LICENSES
	);
}*/


function sendRequest(dispatch,actionType,url){
	dispatch({
		type:actionType,
		payload:axios.get(url)
	});
	console.log("Action: "+actionType+" to url: "+url+" sent");
}
