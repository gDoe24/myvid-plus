import axios from 'axios';
import { TRENDING_MOVIES } from './types';

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
    axios.get(`/3/trending/movie/week?api_key=8a36c0e935f6343464e22aed214bd7c2`)
        .then(res => {
            dispatch({
                type: TRENDING_MOVIES,
                payload: res.data
            });
        }).catch(err => console.log(err));
};