//import {MOCK_LICENSE_ALL}  from './mocks/MockLicenseAll.js'


import Immutable from 'immutable';


export const initialState= {
    auth:Immutable.fromJS({
        username:'',
        role:'anonymous',
        authenticated:false,
        pageDisplay:{message:'',error:false,active:false}
    })
}
