import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getActionMovies, getTrendingMovies } from './actions/movies';
import rootReducer from './reducers';



const middleware = [thunk];


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)), 
);


export default store;