import React from 'react';

function GenreDisplay(props){

    const genres = props.genres;
    return (
        <div>
            {genres.map((genre, idx) => {
                return(
                    <button  key={`genre-${idx}`} onClick={() => props.handleGenre(idx)}>
                        {genre.title}
                    </button>
                    )
            })}
        </div>
        
    )
}

export default GenreDisplay;