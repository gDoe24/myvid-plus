import React from 'react';


function MoviesDisplay(props){
    
    const genre = props.genre;
    return (

        <h1>{genre.title}</h1>
    )
}

export default MoviesDisplay;