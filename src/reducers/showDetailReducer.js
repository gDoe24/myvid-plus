import { FETCH_SHOW_DETAIL_REQUEST, FETCH_SHOW_DETAIL_SUCCESS, FETCH_SHOW_DETAIL_FAILURE,
    SHOW_CREDITS, SHOW_WATCH_PROVIDERS, SHOW_VIDEOS, SIMILAR_SHOWS } from '../actions/types';



const initialState = {
    loading: true,
    show_detail: {},
    show_credits: [],
    watch_providers: [],
    show_videos: {
        loading: true,
        data: []
    },
    similar_shows: [],

    err: ''
}

export const showDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SHOW_DETAIL_REQUEST: return {
            ...state,
            loading: true,
            err: ''
        }
        case FETCH_SHOW_DETAIL_SUCCESS: return{
            ...state,
            show_detail: action.payload
        }
        case SHOW_CREDITS: return {
            ...state,
            loading: false,
            show_credits: action.payload
        }
        case SHOW_WATCH_PROVIDERS: return {
            ...state,
            watch_providers: action.payload
        }
        case SHOW_VIDEOS: return {
            ...state,
            show_videos: {
                loading: false,
                data: action.payload
            }
        }
        case SIMILAR_SHOWS: return {
            ...state,
            similar_shows: action.payload
        }
        case FETCH_SHOW_DETAIL_FAILURE: return {
            ...state,
            err: action.error
        }
        default: return state
    }
}

export function validShowProvidersSelector(state){
    const validProviders = ["apple itunes", "amazon video", "disney plus", "hbo max", "google play movies", "hulu",
                            "netflix", "youtube", "crunchyroll", "funimation now"];

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
                output.push(provider.provider_name);
            }
        })
    }

    if (flatrate){
        flatrate.forEach(provider => {
            if (validProvidersSet.has(provider.provider_name.toLowerCase())){
                output.push(provider.provider_name);
            }
        })
    }

    if (buy){
        buy.forEach(provider => {
            if ((validProvidersSet.has(provider.provider_name.toLowerCase()) && (!output.includes(provider.provider_name)))){
                output.push(provider.provider_name);
            }
        })
    }

    return output;
}

export function validShowTrailerSelector(state){
    const data = state.show_videos.data;
    const output = [];
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