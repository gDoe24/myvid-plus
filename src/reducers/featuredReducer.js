import {FEATURED_REQUEST, FEATURED_DETAIL_SUCCESS, FEATURED_CREDITS,
    FEATURED_VIDEO, FEATURED_FAILURE} from '../actions/types';


import produce from 'immer';

const initialState = {
    loading: true,
    movies: [],
    err: ''
}

export const featuredReducer = (state = initialState, action) => {
    switch(action.type){
        case FEATURED_REQUEST: return{
            ...state,
            loading: true
        }
        case FEATURED_DETAIL_SUCCESS: return produce(state, draft => {
            draft.movies.push(action.payload); 
            draft.loading = false;
        })
        case FEATURED_FAILURE: return {
            ...state,
            err: action.error
        }
        default: return state
    }
}