import React, { Fragment } from 'react';


var array = ["Lebron James", "Kobe Bryant", "Michael Jordan", "John Cena", "Deshaun Watson"];
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
                    <a href="#" className="btn fi-play my-2 me-3"><i class="bi bi-play-fill"></i>Play</a>
                    <a href="#" className="btn fi-trailer my-2 ms-3"><i class="bi bi-film"></i>Watch Trailer</a>
                    </div>
                    <h3 className="mt-1 mb-3">Overview</h3>
                    <p className="lead " id="fi-sum">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p>
                    </p>
                </div>
                <div className="featured-cd mx-4">
                    <h2 className="fw-dark mb-4">Director/Cast</h2>
                    {array.map((name, i) =>{
                        return(<p key={name}> {name} </p>)
                    })}
                </div>
        </section>
        </Fragment>
    )
}

export default Featured