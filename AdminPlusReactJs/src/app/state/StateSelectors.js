import Immutable from 'immutable';
import {immutableCollection2Array} from '../utils/Commons.jsx'

//Root selectors


/** Auth Selectors */
	export function auth (state) {	
		return state.auth.toObject();	
	}

	export function auth_authenticated (state){
		//console.log(Object.getPrototypeOf(state));
		return (state.auth && state.auth instanceof Immutable.Map)? state.auth.get('authenticated') : true;
	}

	export function auth_role (state){	
		return state.auth.get('role');
	}

	export function auth_display(state){
		return (state.auth && state.auth instanceof Immutable.Map)? state.auth.get('pageDisplay'):{message:'',error:false,active:false};
	}



