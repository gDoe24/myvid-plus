import React, { Fragment } from 'react';


const array = ["Lebron James", "Kobe Bryant", "Michael Jordan", "John Cena", "Deshaun Watson"];

const featuredMovies = [
                      {title: "Tenet",
                       overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
                       ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                       voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                       image: 'https://www.themoviedb.org/t/p/original/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
                       backdrop: 'https://www.themoviedb.org/t/p/original/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
                       cast: array
                        },/*
                        {title: "Your Name.",
                        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        image: 'https://www.themoviedb.org/t/p/original/a954X8xMnukqMracTipsK3T5lD3.jpg',
                        backdrop: 'https://www.themoviedb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg',
                        cast: array
                         }*/
                      ];


function Featured(){
  
  const mql = window.matchMedia('(max-width: 480px)');

  const smallSection = ( featuredMovies.map((movie, idx) => {
    return(
      <div key={`carousel-item-${idx}`} className={(idx == 0? "carousel-item active": "carousel-item")}>
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

  const largeSection = ( featuredMovies.map((movie, idx) => {
    return(
      <div key={`carousel-item-${idx}`} className={(idx == 0? "carousel-item active": "carousel-item")}>
          <section key={`home-featured-${idx}`} className="home-featured">
            <img key={`item-pic-${idx}`} className="featured-pic mx-3" src={movie.image}>
            </img>
            <div key={`featured-info-${idx}`} className="featured-info mx-2">
              <div className="fi-title-score">
                  <h1 className="fw-dark" id="fi-title">{movie.title}</h1>
                  <div className="fi-score"></div>
              </div>
              
              <div className="fi-btns my-3">
              <a href="#" className="btn fi-play my-2 me-3">
                <i className="bi bi-play-fill"></i>Play
              </a>
              <a href="#" className="btn fi-trailer my-2 ms-3"><i className="bi bi-film"></i>Watch Trailer</a>
              </div>
              <h3 className="fi-overview mt-1 mb-3">Overview</h3>
              <p className="fi-overview-p lead " id="fi-sum">{movie.overview}</p>
          </div>
          <div className="featured-cd mx-4">
              <h2 className="fw-dark mb-4">Director/Cast</h2>
              {movie.cast.map((name) =>{
                  return(<p className="featured-cd-p"key={name}> {name} </p>)
              })} 
          </div>
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