import React from 'react';
import axios from 'axios';


export function executeHttpGet(url, apiCallParameters, onSuccess, onFailure){

		console.log('sending to : '+url);
		console.log(' with params: ');
		console.log(apiCallParameters);
		
		axios.get(url, {params:apiCallParameters})
            .then(function (res) {            	
            	onSuccess(url,res);        
        }).catch(function (err) {
            	onFailure(url,err);        
        });
	}


export function executeHttpPost(url, apiCallParameters, onSuccess, onFailure){

		console.log('sending to : '+url);
		console.log(' with params: ');
		console.log(apiCallParameters);
		
		axios.post(url, 
			apiCallParameters,{ 
				headers: {
       				"Content-Type": "application/json;charset=UTF-8"
       			}
       	}).then(function (res) {            	
            	onSuccess(url,res);        
        }).catch(function (err) {
            	onFailure(url,err);        
        });
	}

	