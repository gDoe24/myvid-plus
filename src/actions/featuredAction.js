import axios from 'axios';
import {FEATURED_REQUEST, FEATURED_DETAIL_SUCCESS, FEATURED_CREDITS,
        FEATURED_VIDEO, FEATURED_FAILURE} from './types';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getFeaturedDetail = (movies) => (dispatch) =>{
    dispatch({
        type: FEATURED_REQUEST
    })
    movies.forEach(movie => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}&language=en-US`)
       .then(res =>{
           const id = movie;
           const title = res.data['title'];
           const overview = res.data['overview'];
           const poster_path = res.data['poster_path'];
           const vote_average = res.data['vote_average'];
           const payload = {
               id: id,
               title: title,
               overview: overview,
               poster_path: poster_path,
               vote_average: vote_average
           }
           
           dispatch({
               type: FEATURED_DETAIL_SUCCESS,
               payload: payload
           })
       })
       .catch(err => {
           dispatch({
               type: FEATURED_FAILURE,
               error: err
           })
       })
    });
       
}