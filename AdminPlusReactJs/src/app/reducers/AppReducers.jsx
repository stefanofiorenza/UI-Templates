/**
 * Created by s.fiorenza on 10/10/2017.
 */
import { combineReducers } from 'redux';
import  {initialState} from '../state/InitialState.jsx';
import  AuthenticationReducer from './AuthenticationReducer.jsx';


export default function AppReducers(state = initialState, action) {
    return {
        auth: AuthenticationReducer(state.auth, action),
    }
}