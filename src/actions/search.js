import axios from 'axios';
import {SEARCH_MULTI_SUCCESS, SEARCH_MULTI_FAILURE} from './types';

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchMulti = (value) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${value}&page=1`)
        .then(res => {
            const data = res.data["results"];
            dispatch({
                type: SEARCH_MULTI_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: SEARCH_MULTI_FAILURE,
                error: err.message
            })
        })
    }