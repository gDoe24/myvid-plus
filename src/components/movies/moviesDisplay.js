import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGenreById } from '../../actions/movies';


function MoviesDisplay({props, getGenreById, movies}){
    
    useEffect(() => {
        getGenreById();
    }, [])

    const genre = props.genre;

    return (
        <div>
        <h1>{genre.title}</h1>
        {genre.id == 0 ? 
            <h1>Popular Movies</h1>
            :
        
        movies.genre_by_id.loading ? 
            <h3>Loading</h3> :
            movies.genre_by_id.data.map((movie, idx) => {
                return (
                    <p key={`movie-${idx}`}>{movie.title}</p>
                )
            })
    }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.moviesReducer,
        props: ownProps
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getGenreById: () => dispatch(getGenreById(ownProps.genre.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDisplay);