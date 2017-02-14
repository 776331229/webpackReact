import { combineReducers } from 'redux';
import loginState from './loginReducers.js'


const rootReducer = combineReducers(Object.assign(loginState));

export default rootReducer