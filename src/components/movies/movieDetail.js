import React, {useEffect} from "react";
import {css, jsx } from '@emotion/react';
import '../../styles/detail.css';

function MovieDetail({ match }){

    useEffect(() => {
        console.log(match);
    }, [])
    
    return (
        
        <div className="movie-detail-main">
            <section className="detail" 
                     /*style={{
                        backgroundImage: `url("https://www.themoviedb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg")`,
                        
                     }}*/
                     >
                <div className="detail-info">
                    <div className="detail-title-score mb-3">
                        <h1 className="fw-dark" id="detail-title">Title</h1>
                        <div className="detail-score"></div>
                    </div>
                    <div className="detail-btns">
                        <a href="#" className="btn fi-play me-1">
                            <i className="bi bi-play-fill"></i>Play
                        </a>
                        <a href="#" className="btn fi-trailer ms-1 fw-light"><i className="bi bi-film"></i>Watch Trailer
                        </a>
                    </div>
                    <h3 className="detail-overview mt-1 mb-3">Overview</h3>
                    <p className="detail-overview-p lead " id="fi-sum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="detail-cd mx-4">
                        <div className="director">
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
                </div>
                
                <img className="detail-pic"
                    src="https://www.themoviedb.org/t/p/original/srYya1ZlI97Au4jUYAktDe3avyA.jpg">
                </img>
                <div className="overlay"></div>
            </section>
            </div>
    )
};

export default MovieDetail;