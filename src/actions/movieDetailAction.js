import axios from 'axios';
import { FETCH_MOVIE_DETAIL_FAILURE, FETCH_MOVIE_DETAIL_REQUEST, FETCH_MOVIE_DETAIL_SUCCESS, 
    MOVIE_CREDITS, MOVIE_VIDEOS, MOVIE_WATCH_PROVIDERS, SIMILAR_MOVIES} from './types';


const API_KEY = process.env.REACT_APP_API_KEY;

/* MOVIE DETAIL ACTIONS 
--------------------------*/

// GET MOVIE DETAIL
export const getMovieDetail = (movie_id) => (dispatch) => {
    dispatch({ 
        type: FETCH_MOVIE_DETAIL_REQUEST 
    })
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            const movie = res.data;
            dispatch({
                type: FETCH_MOVIE_DETAIL_SUCCESS,
                payload: movie
            })
        }).catch(err => {
            dispatch({
                type: FETCH_MOVIE_DETAIL_FAILURE,
                error: err.message
            })
        })
}

// GET MOVIE CREDITS

export const getMovieCredits = (movie_id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => {
        const credits = res.data;
        dispatch({
            type: MOVIE_CREDITS,
            payload: credits
        })
    }).catch(err => {
        dispatch({
            type: FETCH_MOVIE_DETAIL_FAILURE,
            error: err.message
        })
    })
}

// GET MOVIE WATCH PROVIDERS
// ***** MUST ATTRIBUTE TO JUST WATCH *******

export const getWatchProviders = (movie_id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${API_KEY}`)
        .then(res => {
            const providers = res.data["results"]
            dispatch({
                type: MOVIE_WATCH_PROVIDERS,
                payload: providers
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_MOVIE_DETAIL_FAILURE,
                error: err.message
            })
        })
}

// GET MOVIE VIDEOS

export const getVideos = (movie_id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`)
        .then(res => {
            const data = res.data["results"]
            dispatch({
                type: MOVIE_VIDEOS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_MOVIE_DETAIL_FAILURE,
                error: err.message
            })
        })
}


// GET SIMILAR MOVIES

export const getSimilarMovies = (movie_id) => (dispatch) => {
    axios.get(` https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            const movies = res.data["results"]
            dispatch({
                type: SIMILAR_MOVIES,
                payload: movies
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_MOVIE_DETAIL_FAILURE,
                error: err.message
            })
        })
}