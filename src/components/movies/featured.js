import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../layout/ProgressBar';
import { getFeaturedDetail } from '../../actions/featuredAction';
import { getTrending } from '../../actions/movies';



function Featured({featuredReducer, getFeaturedDetail, moviesReducer, getTrending}){
  
  const [featuredMovies, setMovies] = useState();
  useEffect(() => {
    getTrending('movie');
    
  }, []);
  const m = moviesReducer.genres[0].data.slice(0,3);
  setMovies(m);
  useEffect(() => {
    getFeaturedDetail(featuredMovies);
  }, [])

  const movies = featuredReducer.movies;
  const loading = featuredReducer.loading;
  const mql = window.matchMedia('(max-width: 767px)');

  const smallSection = ( 
    loading == true ? 
    <h2>Loading</h2> :
    movies.map((movie, idx) => {
    return(
      <div key={`carousel-item-${idx}`} className={(idx === 0? "carousel-item active": "carousel-item")}>
          <section key={`home-featured-${idx}`} className="home-featured-sm"
          style={{
            backgroundImage: `url(${movie.backdrop})`
          }}>
            <div key={`featured-info-${idx}`} className="featured-info-sm mx-2">
              <div className="fi-title-score">
                  <h1 className="fw-dark" id="fi-title">{movie.title}</h1>
                  <div className="fi-score"></div>
              </div>
              <div className="fi-btns">
              <a href="#" className="btn fi-play me-1">
                <i className="bi bi-play-fill"></i>Play
              </a>
              <a href="#" className="btn fi-trailer ms-1 fw-light"><i className="bi bi-film"></i>Watch Trailer
              </a>
              </div>
          </div>
          </section>
          </div>
        )
        }
        ));
  const largeSection = (
    loading == true ?
              <h2>Loading</h2>
              :
              movies.map((movie, idx) => {
    return(
      
      <div key={`carousel-item-${idx}`} className={(idx == 0? "carousel-item active": "carousel-item")}>
          <section key={`home-featured-${idx}`} className="home-featured">
            <img key={`item-pic-${idx}`} className="featured-pic mx-3" 
                src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}>
            </img>
            <div key={`featured-info-${idx}`} className="featured-info mx-2">
              <div className="fi-title-score">
                  <h1 className="fw-dark" id="fi-title">{movie.title}</h1>
                  <div className="fi-score">
                    <ProgressBar rating={movie.vote_average}/>
                  </div>
              </div>
              
              <div className="fi-btns">
              <a href="#" className="btn fi-play">
                <i className="bi bi-play-fill"></i>Play
              </a>
              <a href="#" className="btn fi-trailer"><i className="bi bi-film"></i>Watch Trailer</a>
              </div>
              <h3 className="fi-overview">Overview</h3>
              <p className="fi-overview-p lead " id="fi-sum">{movie.overview}</p>
          </div>
        {/* <div className="featured-cd mx-4">
              <h2 className="fw-dark mb-4">Starring</h2>
              <ul className="featured-cd-ul">
              {cast[idx].map((name) =>{
                  return(<li className="featured-cd-p"key={name}> {name} </li>)
              })} 
              </ul>
            </div> */} 
          </section>
          </div> 
        )
        }
        ));
  
    return (
        <Fragment>
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
            {
              mql.matches == false ? largeSection : smallSection
            }
            </div>
          <a className="carousel-control-prev" href=".carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            
          </a>
          <a className="carousel-control-next" href=".carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            
          </a>
    </div>
        </Fragment>
    )
}
const mapStateToProps = (state, ownProps) => {
  return{
      featuredReducer: state.featuredReducer,
      moviesReducer: state.moviesReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTrending: (media_type) => dispatch(getTrending(media_type)),
    getFeaturedDetail: (movies) => dispatch(getFeaturedDetail(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);