
import Immutable from 'immutable';
import {ROLE_ADMIN,ROLE_SUPERVISOR, ROLE_OPERATOR,ROLE_ANONYMOUS} from '../utils/Consts.js'
import {immutableCollection2Array} from '../utils/Commons.jsx'


export function filterQueueActivityArrayByRole(queueData, role){

	switch (role){

		case ROLE_ADMIN:
			return immutableCollection2Array(queueData);

		case ROLE_SUPERVISOR:
			let spvsrArray=[]

			for (let i=0; i<queueData.length; i++){
				if(queueData[i].name && queueData[i].name=='livetradersupport'){
					spvsrArray.push(queueData[i]);
				}
			}
			return spvsrArray;

		case ROLE_OPERATOR: 
			
		default:
			return [];
	}
}