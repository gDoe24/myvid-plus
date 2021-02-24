import React, {useEffect, useState} from "react";
import '../../styles/detail.css';
import axios from 'axios';

function MovieDetail({ match }){

    const API_KEY = process.env.REACT_APP_API_KEY;
    const movie_id = match.params.id;

    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
             .then(res => {
                 const movie = res.data;
                 setMovie(movie);
                 console.log(movie);
             }).catch(err => {
                 console.log(err.message);
             })
    }, [])
    
    return (
        
        <div className="movie-detail-main">
            <section className="detail">
                <div className="detail-info">
                    <div className="detail-title-score mb-3">
                        <h1 className="fw-dark" id="detail-title">{movie.title}</h1>
                        <div className="detail-score"></div>
                    </div>
                    <div className="detail-btns mb-5">
                        <a href="#" className="btn fi-play mx-3">
                            <i className="bi bi-play-fill"></i>Play
                        </a>
                        <a href="#" className="btn fi-trailer mx-3 fw-light"><i className="bi bi-film"></i>Watch Trailer
                        </a>
                    </div>
                    <h3 className="detail-overview mt-1 mb-3">Overview</h3>
                    <p className="detail-overview-p lead " id="fi-sum">
                        {movie.overview}
                    </p>
                </div>
                <div className="detail-cd mx-4">
                        <div className="director mb-4">
                            <h2 className="fw-dark mb-3">Director/Cast</h2>
                            <ul>
                                <li>Kobe</li>
                                <li>Kobe</li>
                                <li>Kobe</li>
                                <li>Kobe</li>
                            </ul>
                        </div>
                        <div className="watch mb-3">
                            <h2>Where to Watch</h2>
                            <ul>
                                <li>Kobe</li>
                                <li>Kobe</li>
                                <li>Kobe</li>
                                <li>Kobe</li>
                            </ul>
                        </div>
                    </div>
                <img className="detail-pic"
                    src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}>
                </img>
                <div className="overlay"></div>
            </section>
            </div>
    )
};

export default MovieDetail;