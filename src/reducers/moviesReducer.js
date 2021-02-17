import { ACTION_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, TRENDING_MOVIES_SUCCESS } from '../actions/types';

/* TODO: Implement Reducers for:
    GET Popular
    GET Genres {action, animation, adventure, thriller}
    GET Top Rated
    GET Movie Details
    GET Watch Providers
    SEARCH Movies
*/

const initialState = {
    loading: false,
    trendingMovies: [],
    actionMovies: [],
    err: ''
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_REQUEST: return {
            loading: true
        }
        case TRENDING_MOVIES_SUCCESS: return {
            ...state,
            trendingMovies: action.payload,
            err: ''
        }
        case ACTION_MOVIES_SUCCESS: return {
            ...state,
            loading: false,
            actionMovies: action.payload
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