import React, { Fragment } from 'react';
import ProgressBar from '../layout/ProgressBar';
import { Link } from 'react-router-dom';

function Featured(props){
  
  const movies = props.moviesReducer.genres[0];
  const featuredMovies = movies.data.slice(0,3);
  const mql = window.matchMedia('(max-width: 767px)');

  const smallSection = ( featuredMovies.map((movie, idx) => {
    return(
      <div key={`carousel-item-${idx}`} className={(idx == 0? "carousel-item active": "carousel-item")}>
        <Link 
            to={ movie.title ? `/movies/${movie.id}`
              :`/tv/${movie.id}`}
            style={{textDecoration:"none"}}
            >
          <section key={`home-featured-${idx}`} className="home-featured-sm"
          style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/original/${movie.backdrop_path}")`
          }}>
            <div key={`featured-info-${idx}`} className="featured-info-sm mx-2">
              <div className="fi-title-score">
                  <h1 className="fw-dark" id="fi-title">{movie.title ? movie.title : movie.name}</h1>
                  <div className="fi-score"></div>
              </div>
              <div className="fi-btns">
              <Link 
                  to={movie.title ? `/movies/${movie.id}/video`
                : `/tv/${movie.id}/video`}
                  className="btn fi-play me-1">
                <i className="bi bi-play-fill"></i>Play
              </Link>
              <Link 
                  to={movie.title ? `/movies/${movie.id}/video`
                  : `/tv/${movie.id}/video`} 
                  className="btn fi-trailer ms-1 fw-light">
                    <i className="bi bi-film"></i>Watch Trailer
              </Link>
              </div>
          </div>
          </section>
          </Link>
          </div>
        )
        }
        ));

  const largeSection = ( featuredMovies.map((movie, idx) => {
    return(
      <div key={`carousel-item-${idx}`} className={(idx == 0? "carousel-item active": "carousel-item")}>
        <Link 
            to={ movie.title ? `/movies/${movie.id}`
              :`/tv/${movie.id}`}
            style={{textDecoration:"none"}}
            >
          <section key={`home-featured-${idx}`} className="home-featured">
            
              <img
                key={`item-pic-${idx}`} 
                className="featured-pic"
                alt={`poster for ${movie.title ? movie.title : movie.name}`}
                src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} />
            
            <div key={`featured-info-${idx}`} className="featured-info">
              <div className="fi-title-score">
                <h1 id="fi-title"
                  key={`href-${idx}`}>
                    {movie.title ?  movie.title : movie.name}</h1>
                  <div className="fi-score">
                    <ProgressBar rating={movie.vote_average}/>
                  </div>
              </div>
              
              <div className="fi-btns my-3">
              <Link 
                  to={movie.title ? `/movies/${movie.id}/video`
                  : `/tv/${movie.id}/video`} 
                  className="btn fi-play my-1">
                <i className="bi bi-play-fill"></i>Play
              </Link>
              <Link 
                  to={movie.title ? `/movies/${movie.id}/video`
                  : `/tv/${movie.id}/video`} 
                  className="btn fi-trailer my-1">
                    <i className="bi bi-film"></i>Watch Trailer
              </Link>
              </div>
              <h3 className="fi-overview">Overview</h3>
              <p className="fi-overview-p lead " id="fi-sum">{movie.overview}</p>
          </div>
         {/* <div className="featured-cd mx-4">
              <h2 className="fw-dark mb-4">Director/Cast</h2>
              <ul className="featured-cd-ul">
              {movie.cast.map((name) =>{
                  return(<li className="featured-cd-p"key={name}> {name} </li>)
              })} 
              </ul>
            </div> */}
          </section>
          </Link>
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
            { mql.matches == false ? largeSection : smallSection}
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

export default Featured