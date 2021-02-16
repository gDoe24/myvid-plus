import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TRENDING_MOVIES } from './actions/types';
import { getTrendingMovies } from './actions/movies';
import rootReducer from './reducers';



const middleware = [thunk];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
);


store.dispatch(getTrendingMovies());

export default store;