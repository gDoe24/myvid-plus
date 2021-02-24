import React, {useEffect} from "react";
import { connect } from 'react-redux';
import '../../styles/detail.css';
import {getMovieDetail} from '../../actions/movieDetailAction';

function MovieDetail({ match, movie, getMovieDetail }){

    
    const movie_id = match.params.id;

    useEffect(() => {
        getMovieDetail(movie_id);
    }, [])
    
    return (
        
        <div className="movie-detail-main">
            {movie.loading ? 
                <h2>Loading </h2> :
            <section className="detail">
                 
                <div className="detail-info">
                    <div className="detail-title-score mb-3">
                        <h1 className="fw-dark" id="detail-title">{movie.movie_detail.title}</h1>
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
                        {movie.movie_detail.overview}
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
                    src={`https://www.themoviedb.org/t/p/original${movie.movie_detail.backdrop_path}`}>
                </img>
                <div className="overlay"></div>
                
            </section>
}
            </div>
    )
};

const mapStateToProps = state => {
    return {
        movie: state.movieDetailReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
        
        return {
            getMovieDetail: () => dispatch(getMovieDetail(ownProps.match.params.id)),
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);