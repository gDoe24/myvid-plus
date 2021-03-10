import axios from 'axios';
import {SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE, SEARCH_SHOWS_SUCCESS, SEARCH_SHOWS_FAILURE} 
        from './types';

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchMovies = (value, page) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=${page}`)
        .then(res => {
            const data = res.data["results"];
            const pages = res.data["total_pages"];
           dispatch({
                type: SEARCH_MOVIES_SUCCESS,
                payload: data,
                pages: pages
            });
        })
        .catch(err => {
            dispatch({
                type: SEARCH_MOVIES_FAILURE,
                error: err.message
            })
        })
    }

export const searchShows = (value, page) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${value}&page=${page}`)
        .then(res => {
            const data = res.data["results"];
            const pages = res.data["total_pages"];
        dispatch({
                type: SEARCH_SHOWS_SUCCESS,
                payload: data,
                pages: pages
            });
        })
        .catch(err => {
            dispatch({
                type: SEARCH_SHOWS_FAILURE,
                error: err.message
            })
        })
}