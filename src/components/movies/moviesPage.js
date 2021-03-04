import React, { Fragment } from 'react';
import GenreDisplay from './genresDisplay';
import MoviesDisplay from './moviesDisplay';




function MoviesPage() {
    return (
        <Fragment>
            <h1>MoviesPage</h1>
            <GenreDisplay />
            <MoviesDisplay />
        </Fragment>
    )
};

export default MoviesPage;