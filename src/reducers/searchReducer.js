import {SEARCH_MULTI_SUCCESS, SEARCH_MULTI_FAILURE } from '../actions/types';

const initialState = {
    loading: true,
    data: [],
    error: ''
}

export const searchReducer = (state=initialState, action) =>{
    switch(action.type){
        case SEARCH_MULTI_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload
        }
        case SEARCH_MULTI_FAILURE: return {
            ...state,
            error: action.error
        }
        default: return state
    }
}