import React, { Fragment } from 'react';


const array = ["Lebron James", "Kobe Bryant", "Michael Jordan", "John Cena", "Deshaun Watson"];

const featuredMovies = [
                      {title: "Tenent",
                       overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
                       ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                       voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                       image: '/Tenent.jpg',
                       cast: array
                        },
                        {title: "Your Name.",
                        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        image: '/Tenent.jpg',
                        cast: array
                         }
                      ];


function Featured(){
  
    return (
        <Fragment>
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
            { featuredMovies.map((movie, idx) => {
              return(
                <div className={(idx == 0? "carousel-item active": "carousel-item")}>
                  <section className="home-featured">
                    <img className="featured-pic mx-3" src={process.env.PUBLIC_URL + movie.image}>
                    </img>
                    <div className="featured-info mx-2">
                      <div className="fi-title-score">
                          <h1 className="fw-dark" id="fi-title">{movie.title}</h1>
                          <div className="fi-score"></div>
                      </div>
                      
                      <div className="fi-btns my-3">
                      <a href="#" className="btn fi-play my-2 me-3"><i className="bi bi-play-fill"></i>Play</a>
                      <a href="#" className="btn fi-trailer my-2 ms-3"><i className="bi bi-film"></i>Watch Trailer</a>
                      </div>
                      <h3 className="mt-1 mb-3">Overview</h3>
                      <p className="lead " id="fi-sum">{movie.overview}</p>
                  </div>
                  <div className="featured-cd mx-4">
                      <h2 className="fw-dark mb-4">Director/Cast</h2>
                      {movie.cast.map((name) =>{
                          return(<p key={name}> {name} </p>)
                      })} 
                  </div>
                  </section>
                  </div>
                  )
                  }
                  )}
                  
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