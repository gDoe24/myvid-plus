import { TRENDING_MOVIES } from '../actions/types';

/* TODO: Implement Reducers for:
    GET Popular
    GET Top Rated
    GET Movie Details
    GET Images
    GET Watch Providers
    SEARCH Movies
*/

const initialState = {
    trendingMovies: []
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case TRENDING_MOVIES: return {
            ...state,
            trendingMovies: action.payload
        }
        default: return state
    }
}