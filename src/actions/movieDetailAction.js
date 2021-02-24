import axios from 'axios';
import { FETCH_MOVIE_DETAIL_FAILURE, FETCH_MOVIE_DETAIL_REQUEST, FETCH_MOVIE_DETAIL_SUCCESS} from './types';


const API_KEY = process.env.REACT_APP_API_KEY;

/* MOVIE DETAIL ACTIONS 
--------------------------*/
export const getMovieDetail = (movie_id) = (dispatch) => {
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


// GET SIMILAR MOVIES