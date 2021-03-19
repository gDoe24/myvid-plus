import React, {useEffect} from "react";
import { connect } from 'react-redux';
import '../../styles/detail.css';
import {getMovieDetail, getMovieCredits, getWatchProviders, 
        getVideos, getSimilarMovies} from '../../actions/movieDetailAction';
import {validProvidersSelector} from '../../reducers/movieDetailReducer';
import Suggested from '../layout/suggested';

function MovieDetail({ movie, providers, getMovieDetail, getMovieCredits, getWatchProviders,
                      getSimilarMovies, getVideos }){
    useEffect(() => {
        getMovieDetail();
        getMovieCredits();
        getWatchProviders();
        getVideos();
        getSimilarMovies();
    }, [])
    
    return (
        
        <div className="movie-detail-main">
            {movie.loading ? 
                <h2>Loading </h2> :
            <section className="detail">
                 
                <div className="detail-info">
                    <div className="detail-title-score">
                        <h1 className="fw-dark" id="detail-title">{movie.movie_detail.title}</h1>
                        <div className="detail-score"></div>
                    </div>
                    <div className="detail-btns">
                        <a href="#" className="btn fi-play dt-play">
                            <i className="bi bi-play-fill"></i>Play
                        </a>
                        <a href="#" className="btn fi-trailer dt-trailer fw-light"><i className="bi bi-film"></i>Watch Trailer
                        </a>
                    </div>
                    <h2 className="detail-overview">Overview</h2>
                    <p className="detail-overview-p lead" id="">
                        {movie.movie_detail.overview}
                    </p>
                </div>
                <div className="detail-cd">
                        <div className="cast">
                            <h2 className="fw-dark">Starring:</h2>
                                {movie.movie_credits.cast.slice(0,5).map((actor, idx) => {
                                    return (
                                        <div className="cast-n" key={actor.id}>{actor.name}</div>
                                    )
                                })}
                            
                        </div>
                        <div className="watch">
                            <h2>Where to Watch</h2>
                            { providers ? 
                              providers.map((provider, idx) => {
                                return <div key={`${provider}-${idx}`}>
                                    <img className="me-3"
                                        src={`${process.env.PUBLIC_URL}/${provider.toLowerCase()}.svg`}/>
                                    {provider}
                                </div>
                            }) 
                            : <div>N/A</div>
                            }
                        </div>
                    </div>
                <img className="detail-pic"
                    src={`https://www.themoviedb.org/t/p/original${movie.movie_detail.backdrop_path}`}>
                </img>
                <div className="overlay"></div>
                
            </section>
}
            <Suggested suggested={movie.similar_movies} name={movie.movie_detail.title}/>
            </div>
    )
};

const mapStateToProps = state => {
    return {
        movie: state.movieDetailReducer,
        providers: validProvidersSelector(state.movieDetailReducer)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            getMovieDetail: () => dispatch(getMovieDetail(ownProps.match.params.id)),
            getMovieCredits: () => dispatch(getMovieCredits(ownProps.match.params.id)),
            getWatchProviders: () => dispatch(getWatchProviders(ownProps.match.params.id)),
            getVideos: () => dispatch(getVideos(ownProps.match.params.id)),
            getSimilarMovies: () => dispatch(getSimilarMovies(ownProps.match.params.id))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);