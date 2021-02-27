import axios from 'axios';
import { FETCH_SHOW_DETAIL_REQUEST, FETCH_SHOW_DETAIL_SUCCESS, FETCH_SHOW_DETAIL_FAILURE,
    SHOW_CREDITS, SHOW_WATCH_PROVIDERS, SHOW_VIDEOS, SIMILAR_SHOWS } from './types';

const API_KEY = process.env.REACT_APP_API_KEY;

// GET SHOWS DETAIL
export const getShowDetail = (show_id) => (dispatch) => {
    dispatch({ 
        type: FETCH_SHOW_DETAIL_REQUEST 
    })
    axios.get(`https://api.themoviedb.org/3/tv/${show_id}?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            const show = res.data;
            dispatch({
                type: FETCH_SHOW_DETAIL_SUCCESS,
                payload: show
            })
        }).catch(err => {
            dispatch({
                type: FETCH_SHOW_DETAIL_FAILURE,
                error: err.message
            })
        })
}

// GET SHOW CREDITS

export const getShowCredits = (show_id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/tv/${show_id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => {
        const credits = res.data;
        dispatch({
            type: SHOW_CREDITS,
            payload: credits
        })
    }).catch(err => {
        dispatch({
            type: FETCH_SHOW_DETAIL_FAILURE,
            error: err.message
        })
    })
}

// GET SHOW WATCH PROVIDERS
// ***** MUST ATTRIBUTE TO JUST WATCH *******

export const getShowWatchProviders = (show_id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/tv/${show_id}/watch/providers?api_key=${API_KEY}`)
        .then(res => {
            const providers = res.data["results"]["US"];
            dispatch({
                type: SHOW_WATCH_PROVIDERS,
                payload: providers
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_SHOW_DETAIL_FAILURE,
                error: err.message
            })
        })
}

// GET SHOW VIDEOS

export const getShowVideos = (show_id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/tv/${show_id}/videos?api_key=${API_KEY}`)
        .then(res => {
            const data = res.data["results"]
            dispatch({
                type: SHOW_VIDEOS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_SHOW_DETAIL_FAILURE,
                error: err.message
            })
        })
}


// GET SIMILAR SHOWS

export const getSimilarShows = (show_id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/tv/${show_id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            const shows = res.data["results"]
            dispatch({
                type: SIMILAR_SHOWS,
                payload: shows
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_SHOW_DETAIL_FAILURE,
                error: err.message
            })
        })
}