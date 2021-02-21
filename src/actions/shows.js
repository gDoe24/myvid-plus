import axios from 'axios';
import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_FAILURE, TRENDING_SHOWS_SUCCESS,
        ACTION_SHOWS_SUCCESS, COMEDY_SHOWS_SUCCESS, SCIFI_SHOWS_SUCCESS} from './types';

/* TODO: Implement actions for endpoints:
    GET Popular
    GET Top Rated
    GET TV Airing Today
    GET Details
    GET Seasons
    Get Images
    GET Similar TV Shows
    GET Watch Providers
*/

const API_KEY = process.env.REACT_APP_API_KEY;

// GET Trending Shows
export const getTrendingShows = () => (dispatch) =>{
    dispatch({
        type: FETCH_SHOWS_REQUEST
    })
    axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
        .then(res => {
            // Response.data is the object of shows
            const shows = res.data["results"];
            dispatch({
                type: TRENDING_SHOWS_SUCCESS,
                payload: shows
            });
        }).catch(err => {
            dispatch({
                type: FETCH_SHOWS_FAILURE,
                error: err.message
            })
        });
};

// GET Action and Adventure Shows
export const getActionShows = () => (dispatch) =>{
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10759`)
        .then(res => {
            // Response.data is the object of shows
            const shows = res.data["results"];
            dispatch({
                type: ACTION_SHOWS_SUCCESS,
                payload: shows
            });
        }).catch(err => {
            dispatch({
                type: FETCH_SHOWS_FAILURE,
                error: err.message
            })
        });
};

// GET COMEDY SHOWS

export const getComedyShows = () => (dispatch) =>{
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`)
        .then(res => {
            // Response.data is the object of shows
            const shows = res.data["results"];
            dispatch({
                type: COMEDY_SHOWS_SUCCESS,
                payload: shows
            });
        }).catch(err => {
            dispatch({
                type: FETCH_SHOWS_FAILURE,
                error: err.message
            })
        });
};

// GET SCI-FI SHOWS

export const getSciFiShows = () => (dispatch) =>{
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10765`)
        .then(res => {
            // Response.data is the object of shows
            const shows = res.data["results"];
            dispatch({
                type: SCIFI_SHOWS_SUCCESS,
                payload: shows
            });
        }).catch(err => {
            dispatch({
                type: FETCH_SHOWS_FAILURE,
                error: err.message
            })
        });
};
