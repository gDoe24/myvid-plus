import React, { Fragment } from 'react';

function Featured(){
    return (
        <Fragment>
        <section className="home-featured py-5 text-center container">
            <div className="home-row row py-5">
            
                <div className="featured-pic col-lg-3 col-md-4 mx-5">
                </div>
                <div className="featured-info col-lg-5 col-md-5">
                    <h1 className="fw-light">Album example</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
                <div className="featured-cd col-lg-3 col-md-3 ">
                    <h1 className="fw-dark">Director/Cast</h1>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

export default Featured