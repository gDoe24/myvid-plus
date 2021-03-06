import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGenreById } from '../../actions/movies';
import { Link } from 'react-router-dom';


function MoviesDisplay({props, getGenreById, movies}){
    
    useEffect(() => {
        getGenreById();
    }, [])

    const genre = props.genre;

    return (
        <div className="movies-container">
        <h1>{genre.title}</h1>
        <div key={`genre-${genre.title}`} className="album-container">
        {genre.id == 0 ? 
            <h1>Popular Movies</h1>
            :
        
        movies.genre_by_id.loading ? 
            <h3>Loading</h3> :
            
            movies.genre_by_id.data.map((movie, idx) => {
                return (
                    <div key={`g-card-${idx}`} className="g-card">
                        <div key={`img-container-${idx}`}className="image-container">
                            <Link  key={`href-${idx}`} to={ movie.title ? `/movie/${movie.id}`
                                                            :`/tv/${movie.id}`}>
                            <img key={`g-card-pic-${idx}`} className="card-pic" 
                            src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} />
                            </Link>
                        </div>
                        <div key={`card-title-area-${idx}`} className="card-title-area">
                            <h4 key={`card-title-${idx}`} className="card-title">
                                {movie.title ? movie.title : movie.name}
                            </h4>
                        </div>                        
                    </div>
                )
            })
    }
        </div>
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