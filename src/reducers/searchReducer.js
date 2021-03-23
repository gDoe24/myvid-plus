import {SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE, SEARCH_SHOWS_SUCCESS, SEARCH_SHOWS_FAILURE }
        from '../actions/types';
import produce from 'immer';


const initialState = {
    loading: true,
    shows: [],
    movies: {
        loading: true,
        data: [],
        pages: 0
    },
    shows: {
        loading: true,
        data: [],
        pages: 0
    },
    total_shows: 0,
    total_movies: 0,
    error: ''
}

export const searchReducer = (state=initialState, action) =>{
    switch(action.type){
        case SEARCH_MOVIES_SUCCESS: return {
            ...state,
            loading: false,
            movies: {
                ...state,
                loading: false,
                data: action.payload,
                pages: action.pages
            },
            total_movies: action.total_results
        }
        case SEARCH_MOVIES_FAILURE: return {
            ...state,
            error: action.error
        }
        case SEARCH_SHOWS_SUCCESS: return {
            ...state,
            loading: false,
            shows: {
                ...state,
                loading: false,
                data: action.payload,
                pages: action.pages
            },
            total_shows: action.total_results
        }
        case SEARCH_SHOWS_FAILURE: return {
            ...state,
            error: action.error
        }
        default: return state
    }
}