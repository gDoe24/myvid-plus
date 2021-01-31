import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

export default combineReducers({
    counterReducer,
    loggedReducer
})
