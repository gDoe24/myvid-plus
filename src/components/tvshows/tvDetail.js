import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {getShowDetail, getShowCredits, getShowWatchProviders, 
    getShowVideos, getSimilarShows} from '../../actions/showDetailAction';
import {validShowProvidersSelector} from '../../reducers/showDetailReducer';
import '../../styles/detail.css';

function TvDetail({ show, providers, getShowDetail, getShowCredits, getShowWatchProviders, 
    getShowVideos, getSimilarShows}){
    
    useEffect(() => {
        getShowDetail();
        getShowCredits();
        getShowWatchProviders(); 
        getShowVideos(); 
        getSimilarShows();
    }, [])

    console.log(providers);
    return (
        <div className="movie-detail-main">
            {show.loading ? 
                <h2>Loading </h2> :
            <section className="detail">
                 
                <div className="detail-info">
                    <div className="detail-title-score">
                        <h1 className="fw-dark" id="detail-title">{show.show_detail.name}</h1>
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
                        {show.show_detail.overview}
                    </p>
                </div>
                <div className="detail-cd">
                        <div className="cast">
                            <h2 className="fw-dark">Starring:</h2>
                                {show.show_credits.cast.slice(0,5).map((actor, idx) => {
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
                            : <div>None</div>
                            }
                        </div>
                    </div>
                <img className="detail-pic"
                    src={`https://www.themoviedb.org/t/p/original${show.show_detail.backdrop_path}`}>
                </img>
                <div className="overlay"></div>
                
            </section>
}
            </div>
    )
};

const mapStateToProps = state => {
    return {
        show: state.showDetailReducer,
        providers: validShowProvidersSelector(state.showDetailReducer)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            getShowDetail: () => dispatch(getShowDetail(ownProps.match.params.id)),
            getShowCredits: () => dispatch(getShowCredits(ownProps.match.params.id)),
            getShowWatchProviders: () => dispatch(getShowWatchProviders(ownProps.match.params.id)),
            getShowVideos: () => dispatch(getShowVideos(ownProps.match.params.id)),
            getSimilarShows: () => dispatch(getSimilarShows(ownProps.match.params.id))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvDetail);