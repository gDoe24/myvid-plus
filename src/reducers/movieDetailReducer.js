import { FETCH_MOVIE_DETAIL_REQUEST, FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_FAILURE,
     MOVIE_CREDITS, MOVIE_VIDEOS, MOVIE_WATCH_PROVIDERS, SIMILAR_MOVIES } from "../actions/types";

const initialState = {
    loading: false,
    movie_detail: {},
    movie_credits: [],
    watch_providers: [],
    movie_videos: [],
    similar_movies: [],

    err: ''
}

export const movieDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIE_DETAIL_REQUEST: return {
            ...state,
            loading: true,
            err: ''
        }
        case FETCH_MOVIE_DETAIL_SUCCESS: return{
            ...state,
            loading: false,
            movie_detail: action.payload
        }
        case MOVIE_CREDITS: return {
            ...state,
            movie_credits: action.payload
        }
        case MOVIE_WATCH_PROVIDERS: return {
            ...state,
            watch_providers: action.payload
        }
        case MOVIE_VIDEOS: return {
            ...state,
            movie_videos: action.payload
        }
        case SIMILAR_MOVIES: return {
            ...state,
            loading: false,
            similar_movies: action.payload
        }
        case FETCH_MOVIE_DETAIL_FAILURE: return {
            ...state,
            err: action.error
        }
        default: return state
    }
}

