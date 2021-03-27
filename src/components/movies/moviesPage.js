import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux';
import GenreDisplay from '../layout/genresDisplay';
import MoviesDisplay from './moviesDisplay';
import '../../styles/displayPages.css';


function MoviesPage({ movies }) {

    const [active, setActive] = useState(0);

    const handleGenre = (id) => {
        setActive(id)
    }

    return (
        <div className="display-main">
            <h1>Movies Page</h1>
            <GenreDisplay handleGenre={handleGenre}
                          genres={movies.genres} active={active}/>
            <MoviesDisplay genre={movies.genres[active]} key={movies.genres[active].id}/>
        </div>
    )
};


const mapStateToProps = state =>{
    return {
        movies: state.moviesReducer
    }
}
export default connect(mapStateToProps)(MoviesPage);