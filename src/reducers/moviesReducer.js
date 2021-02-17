import { FETCH_MOVIES_FAILURE, TRENDING_MOVIES_REQUEST, TRENDING_MOVIES_SUCCESS } from '../actions/types';

/* TODO: Implement Reducers for:
    GET Popular
    GET Top Rated
    GET Movie Details
    GET Images
    GET Watch Providers
    SEARCH Movies
*/

const initialState = {
    loading: false,
    trendingMovies: [],
    err: ''
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case TRENDING_MOVIES_REQUEST: return {
            loading: true
        }
        case TRENDING_MOVIES_SUCCESS: return {
            ...state,
            loading: false,
            trendingMovies: action.payload,
            err: ''
        }
        case FETCH_MOVIES_FAILURE: return {
            err: action.error
        }
        default: return state
    }
}

// SELECTOR

const getMovieInfoSelector = (state) => {
    return state.trendingMovies.map((movie) => {
        return movie.title
    });
}