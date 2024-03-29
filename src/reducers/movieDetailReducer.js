import { FETCH_MOVIE_DETAIL_REQUEST, FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_FAILURE,
     MOVIE_CREDITS, MOVIE_VIDEOS, MOVIE_WATCH_PROVIDERS, SIMILAR_MOVIES } from "../actions/types";

const initialState = {
    loading: true,
    movie_detail: {},
    movie_credits: [],
    watch_providers: [],
    movie_videos: {
        loading: true,
        data: []
    },
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
            movie_detail: action.payload
        }
        case MOVIE_CREDITS: return {
            ...state,
            loading: false,
            movie_credits: action.payload
        }
        case MOVIE_WATCH_PROVIDERS: return {
            ...state,
            watch_providers: action.payload
        }
        case MOVIE_VIDEOS: return {
            ...state,
            movie_videos: {
                loading: false,
                data: action.payload
            }
        }
        case SIMILAR_MOVIES: return {
            ...state,
            similar_movies: action.payload
        }
        case FETCH_MOVIE_DETAIL_FAILURE: return {
            ...state,
            err: action.error
        }
        default: return state
    }
}

export function validProvidersSelector(state){
    const validProviders = ["apple itunes", "amazon video", "disney plus", "hbo max", "google play movies", "hulu",
                            "netflix", "youtube", "crunchyroll"];

    const validProvidersSet = new Set(validProviders);
    if (!state.watch_providers)
    {
        return null;
    }
    const rent = state.watch_providers.rent ? state.watch_providers.rent : null;
    const flatrate = state.watch_providers.flatrate ? state.watch_providers.flatrate : null;
    const buy = state.watch_providers.buy ? state.watch_providers.buy : null;

    const output = []
    
    if (rent){
        rent.forEach(provider => {
            if (validProvidersSet.has(provider.provider_name.toLowerCase())){
                output.push(provider.provider_name)
            }
        })
    }

    if (flatrate){
        flatrate.forEach(provider => {
            if (validProvidersSet.has(provider.provider_name.toLowerCase())){
                output.push(provider.provider_name)
            }
        })
    }

    if (buy){
        buy.forEach(provider => {
            if ((validProvidersSet.has(provider.provider_name.toLowerCase()) && (!output.includes(provider.provider_name)))){
                output.push(provider.provider_name)
            }
        })
    }

    return output;
}

export function validMovieTrailerSelector(state){
    const data = state.movie_videos.data;
    const output = []
    for (let i = 0; i < data.length; i++){
        if ((data[i].type.toLowerCase() === "trailer") && (data[i].name.toLowerCase().includes("official"))){
            return data[i]
        }
        if (data[i].type.toLowerCase() === "trailer"){
            output.push(data[i])
        }
    }
    try{
        return output[0];
    }
    catch {
        return data[0];
    }
}