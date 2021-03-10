import {SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE, SEARCH_SHOWS_SUCCESS, SEARCH_SHOWS_FAILURE }
        from '../actions/types';

const initialState = {
    loading: true,
    data: [],
    pages: 0,
    error: ''
}

export const searchReducer = (state=initialState, action) =>{
    switch(action.type){
        case SEARCH_MOVIES_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            pages: action.pages
        }
        case SEARCH_MOVIES_FAILURE: return {
            ...state,
            error: action.error
        }
        case SEARCH_SHOWS_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            pages: action.pages
        }
        case SEARCH_SHOWS_FAILURE: return {
            ...state,
            error: action.error
        }
        default: return state
    }
}