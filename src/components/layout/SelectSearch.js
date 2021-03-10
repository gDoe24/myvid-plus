import React from 'react';
import '../../styles/displayPages.css';

export default function SelectSearch(props){
    console.log(props.active);
    return (
        <div className="search-row">
        <button className={`${props.active == "movies" ? `genre-box genre-active`: 
                ` genre-box genre-deactive`}`} key={`search-movies`} 
                        onClick={() => props.handleClick("movies")}>
                    <p className="genre-title">Movies</p>
        </button>
        <button className={`${props.active == "shows" ? `genre-box genre-active`: 
        ` genre-box genre-deactive`}`} key={`search-shows`} 
                onClick={() => props.handleClick("shows")}>
            <p className="genre-title">Shows</p>
        </button>
        </div>
    )
}