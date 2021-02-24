import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { showsReducer } from './showsReducer';
import { movieDetailReducer } from './movieDetailReducer';


export default combineReducers({
        moviesReducer,
        showsReducer,
        movieDetailReducer,
    })