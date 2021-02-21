import axios from 'axios';
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, TRENDING_SUCCESS, 
         ACTION_MOVIES_SUCCESS, ANIMATION_MOVIES_SUCCESS, THRILLER_MOVIES_SUCCESS} from './types';

/* TODO: Implement actions for endpoints:
    GET Popular
    GET Top Rated
    GET By Genre
    GET Movie Details
    GET Videos
    GET Watch Providers
    GET Similar Movies
    SEARCH Movies
*/  
const API_KEY = process.env.REACT_APP_API_KEY;

// GET Trending Movies
export const getTrending = () => (dispatch) =>{
    dispatch({
        type: FETCH_MOVIES_REQUEST
    })
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            dispatch({
                type: TRENDING_SUCCESS,
                payload: movies
            });
        }).catch(err => {
            dispatch({
                type: FETCH_MOVIES_FAILURE,
                error: err.message
            })
        });
};

// GET ACTION MOVIES
export const getActionMovies = () => (dispatch) =>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            dispatch({
                type: ACTION_MOVIES_SUCCESS,
                payload: movies
            });
        }).catch(err => {
            dispatch({
                type: FETCH_MOVIES_FAILURE,
                error: err.message
            })
        });
};

// GET ANIMATION MOVIES
export const getAnimationMovies = () => (dispatch) =>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=16`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            dispatch({
                type: ANIMATION_MOVIES_SUCCESS,
                payload: movies
            });
        }).catch(err => {
            dispatch({
                type: FETCH_MOVIES_FAILURE,
                error: err.message
            })
        });
};

// GET THRILLER MOVIES

export const getThrillerMovies = () => (dispatch) =>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=53`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            dispatch({
                type: THRILLER_MOVIES_SUCCESS,
                payload: movies
            });
        }).catch(err => {
            dispatch({
                type: FETCH_MOVIES_FAILURE,
                error: err.message
            })
        });
};

// TOP RATED MOVIES
/*
export const getTopRatedMovies = () => (dispatch) =>{
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            dispatch({
                type: TOP_RATED_MOVIES_SUCCESS,
                payload: movies
            });
        }).catch(err => {
            dispatch({
                type: FETCH_MOVIES_FAILURE,
                error: err.message
            })
        });
};
*/
// SEARCH MULTI
/*
export const searchMovie = (value) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${value}`)
        .then(res => {
            const movies = res.data["results"];
            dispatch({
                type: SEARCH_MOVIE_SUCCESS,
                payload: movies
            });
        })
        .catch(err => {
            dispatch({
                type: SEARCH_MOVIES_FAILURE,
                error: err.message
            })
        })
}*/

// MOVIE DETAIL

// GET SIMILAR MOVIES