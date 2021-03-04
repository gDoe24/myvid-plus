import { ACTION_MOVIES_SUCCESS, ANIMATION_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, 
        FETCH_MOVIES_REQUEST, TRENDING_SUCCESS, THRILLER_MOVIES_SUCCESS,
        SCIFI_MOVIES_SUCCESS, DOCUMENTARY_MOVIES_SUCCESS } from '../actions/types';
import produce from 'immer';

const initialState = {
    loading: false,
    genres: [
        {
            id: 0,
            loading: true,
            title: "Popular",
            data: []
        },
        {
            id: 1,
            loading: true,
            title: "Action Movies",
            data: []
        },
        {
            id: 2,
            loading: true,
            title: "Animated Movies",
            data: []
        },
        {
            id: 3, 
            loading: true,
            title: "Thriller Movies",
            data: []
        },
        {
            id: 4,
            loading: true,
            title: "Sci-Fi",
            data: []
        },
        {
            id: 5,
            loading: true,
            title: "Documentary",
            data: []
        }
    ],
    err: ''
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_REQUEST: return {
            ...state,
            loading: true
        }
        case TRENDING_SUCCESS: return produce(state, draft =>{
            draft.loading = false;
            draft.genres[0].data = action.payload;
            draft.genres[0].loading = false;
        })

        case ACTION_MOVIES_SUCCESS: return produce(state, draft =>{
            draft.genres[1].data = action.payload;
            draft.genres[1].loading = false;
        })
        case ANIMATION_MOVIES_SUCCESS: return produce(state, draft =>{
            draft.genres[2].data = action.payload;
            draft.genres[2].loading = false;

        })
        case THRILLER_MOVIES_SUCCESS: return produce(state, draft =>{
            draft.genres[3].data = action.payload;
            draft.genres[3].loading = false;

        })
        case SCIFI_MOVIES_SUCCESS: return produce(state, draft =>{
            draft.genres[4].data = action.payload;
            draft.genres[4].loading = false;

        })
        case DOCUMENTARY_MOVIES_SUCCESS: return produce(state, draft =>{
            draft.genres[5].data = action.payload;
            draft.genres[5].loading = false;

        })
        case FETCH_MOVIES_FAILURE: return {
            ...state,
            err: action.error
        }
        default: return state
    }
}