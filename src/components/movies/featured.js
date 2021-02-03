import React, { Fragment } from 'react';

function Featured(){
    return (
        <Fragment>
        <section className="home-featured">
                <img className="featured-pic mx-3" src={process.env.PUBLIC_URL + '/Tenent.jpg'}>
                </img>
                <div className="featured-info mx-2">
                    <div className="fi-title-score">
                        <h1 className="fw-dark" id="fi-title">Title</h1>
                        <div className="fi-score"></div>
                    </div>
                    
                    <div className="fi-btns my-3">
                    <a href="#" className="btn btn-primary my-2 me-3">Play</a>
                    <a href="#" className="btn btn-secondary my-2 ms-3">Watch Trailer</a>
                    </div>
                    <h3 className="mt-1 mb-1">Overview</h3>
                    <p className="lead text-muted " id="fi-sum">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p>
                    </p>
                </div>
                <div className="featured-cd mx-4">
                    <h1 className="fw-dark">Director/Cast</h1>
                </div>
        </section>
        </Fragment>
    )
}

export default Featured