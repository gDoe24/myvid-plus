import React from 'react';
import '../../styles/displayPages.css';

export default function SelectSearch(props){
    
    return (
        <div className="search-aside">
            <div className="title-box">
                <span className="aside-title">Search Results</span>
            </div>
            <span className="divider"></span>
            <button className={`${props.active === "movies" ? `search-type-box search-results-active`: 
                    ` search-type-box search-results-deactive`}`} key={`search-movies`} 
                            onClick={() => props.handleClick("movies")}>
                        <span className="search-type">Movies</span>
                        <span className="type-amount">{props.movieTotal}</span>
            </button>
            <button className={`${props.active === "shows" ? `search-type-box search-results-active`: 
            ` search-type-box search-results-deactive`}`} key={`search-shows`} 
                    onClick={() => props.handleClick("shows")}>
                    <span className="search-type">Shows</span>
                    <span className="type-amount">{props.showTotal}</span>
            </button>
        </div>
    )
}