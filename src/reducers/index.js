import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { showsReducer } from './showsReducer';
import { movieDetailReducer } from './movieDetailReducer';
import { showDetailReducer } from './showDetailReducer';
import { searchReducer } from './searchReducer';


export default combineReducers({
        moviesReducer,
        showsReducer,
        movieDetailReducer,
        showDetailReducer,
        searchReducer
    })