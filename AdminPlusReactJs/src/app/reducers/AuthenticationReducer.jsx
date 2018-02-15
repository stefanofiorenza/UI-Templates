
import * as ActionTypes from '../actions'
/*
import {processServiceResponse} from './ReducerCommonUtils.jsx'
import {ROLE_ANONYMOUS} from '../utils/Consts.js'
*/

export default function AuthenticationReducer (state, action) {
   // console.log(state);

    let newDisplay={message:'',error:false,active:false};
    if(action.payload && action.payload.data && action.payload.data.message){
      newDisplay={message:action.payload.data.message,error:false,active:true};
    }

  switch (action.type) {

    case ActionTypes.SIGN_IN_USER_FULFILLED:

        if(action.payload.data.ok){      
           return state.set('username',action.payload.config.params.user)
                        .set('authenticated',true)
                        .set('pageDisplay',newDisplay)
                        .set('role',action.payload.data.data.role);   
         }else{
         return state.set('pageDisplay',{message:action.payload.data.message,error:true,active:true});
                      /*
                      .set('authenticated',false)
                      .set('username',ROLE_ANONYMOUS)
                      .set('role',ROLE_ANONYMOUS); */
        }  

      
    case ActionTypes.SIGN_OUT_USER:  
          return state.set('authenticated',false)
                      .set('role',ROLE_ANONYMOUS)
                      .set('username',ROLE_ANONYMOUS)
                      .set('pageDisplay',{message:'',error:false,active:false});
        

   case ActionTypes.AUTH_CLOSE_DISPLAY:
        newDisplay={message:'',error:false,active:false}; 
        return state.set('pageDisplay',newDisplay);
        //return Object.assign({},state,{pageDisplay:newDisplay});


   case ActionTypes.SIGN_IN_USER_REJECTED:
   //case ActionTypes.SIGN_OUT_USER_REJECTED:    
        newDisplay.error=true;
       //return {...state,pageDisplay:newDisplay}; 
      return state.set('pageDisplay',newDisplay);

    default:
      return state;
  }

}