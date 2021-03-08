import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_FAILURE, TRENDING_SHOWS_SUCCESS,
         ACTION_SHOWS_SUCCESS, COMEDY_SHOWS_SUCCESS, SCIFI_SHOWS_SUCCESS,
         CRIME_SHOWS_SUCCESS, ANIMATION_SHOWS_SUCCESS, SHOW_GENRE_BY_ID_SUCCESS} from '../actions/types';
import produce from 'immer';

const initialState = {
    loading: false,
    genres: [
        {
            id: 0,
            loading: true,
            title: "Trending Shows",
            data: []
        },
        {
            id: 10759,
            loading: true,
            title: "Action & Adventure Shows",
            data: []
        },
        {
            
            id: 35,
            loading: true,
            title: "Comedy Shows",
            data: []
        },
        {
            id: 10765, 
            loading: true,
            title: "Sci-Fi & Fantasy Shows",
            data: []
        },
        {
            id: 80,
            loading: true,
            title: "Crime Shows",
            data: []
        },
        {
            id: 16,
            loading: true,
            title: "Animated Shows",
            data: []
        }
    ],
    genre_by_id: {
        loading: true,
        data: []
    }, 
    err: ''
}

export const showsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SHOWS_REQUEST: return {
            ...state,
            loading: true
        }
        case TRENDING_SHOWS_SUCCESS: return produce(state, draft =>{
            draft.loading = false;
            draft.genres[0].data = action.payload;
            draft.genres[0].loading = false;
        })
        case ACTION_SHOWS_SUCCESS: return produce(state, draft =>{
            draft.genres[1].data = action.payload;
            draft.genres[1].loading = false;
        })
        case COMEDY_SHOWS_SUCCESS: return produce(state, draft =>{
            draft.genres[2].data = action.payload;
            draft.genres[2].loading = false;
        })
        case SCIFI_SHOWS_SUCCESS: return produce(state, draft =>{
            draft.genres[3].data = action.payload;
            draft.genres[3].loading = false;
        })
        case CRIME_SHOWS_SUCCESS: return produce(state, draft =>{
            draft.genres[4].data = action.payload;
            draft.genres[4].loading = false;
        })
        case ANIMATION_SHOWS_SUCCESS: return produce(state, draft =>{
            draft.genres[5].data = action.payload;
            draft.genres[5].loading = false;
        })
        case SHOW_GENRE_BY_ID_SUCCESS: return {
            ...state,
            genre_by_id: {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        case FETCH_SHOWS_FAILURE: return {
            ...state,
            err: action.error
        }
        default: return state
    }
}

