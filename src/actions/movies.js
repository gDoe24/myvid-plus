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
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then(res => {
            // Response.data is the object of movies
            const movies = res.data["results"];
            dispatch({
                type: TRENDING_MOVIES,
                payload: movies
            });
        }).catch(err => console.log(err));
};