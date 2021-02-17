import axios from 'axios';
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, TRENDING_MOVIES_SUCCESS, 
         ACTION_MOVIES_SUCCESS } from './types';

/* TODO: Implement actions for endpoints:
    GET Popular
    GET Top Rated
    GET By Genre
    GET Movie Details
    GET Images
    GET Videos
    GET Watch Providers
    GET Similar Movies
    SEARCH Movies
*/  
const API_KEY = '8a36c0e935f6343464e22aed214bd7c2';

// GET Trending Movies
export const getTrendingMovies = () => (dispatch) =>{
    dispatch({
        type: FETCH_MOVIES_REQUEST
    })
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            dispatch({
                type: TRENDING_MOVIES_SUCCESS,
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
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=action`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            console.log(res.data);
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
// GET THRILLER MOVIES
// GET FANTASY MOVIES