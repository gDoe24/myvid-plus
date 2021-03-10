import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getGenreById, fetchMoviesData } from '../../actions/movies';
import { Link } from 'react-router-dom';


function MoviesDisplay({props, getGenreById, fetchMoviesData, movies}){
    
    const [isBottom, setIsBottom] = useState(false);
    const [page, incrementPage] = useState(2);

    useEffect(() => {
        getGenreById();
        window.addEventListener('scroll', infinteLoop);
    }, [])

    useEffect(() => {
        if (isBottom)
        {
            fetchMoviesData(page);
            incrementPage(page + 1);
            setIsBottom(false);
            setTimeout(1000);
        }
    }, [isBottom])

    const infinteLoop = () => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight)
        {
            setIsBottom(true);
        }
    }

    const genre = props.genre;

    return (
        <div className="movies-container">
        <h1>{genre.title}</h1>
        <div key={`genre-${genre.title}`} className="display-album-container">
        {genre.id == 0 ? 
            <h1>Popular Movies</h1>
            :
        
        movies.genre_by_id.loading ? 
            <h3>Loading</h3> :
            
            movies.genre_by_id.data.map((movie, idx) => {
                return (
                    <div key={`display-g-card-${idx}`} className="display-g-card">
                        <Link  key={`href-${idx}`} to={ movie.title ? `/movies/${movie.id}`
                                                            :`/tv/${movie.id}`}>
                        <div key={`display-img-container-${idx}`}className="display-image-container">
                            
                            <img key={`display-g-card-pic-${idx}`} className="display-card-pic" 
                            src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} />
                        </div>
                        </Link>
                        <div key={`display-card-overlay-${idx}`} className="display-card-overlay">
                            <h4 key={`display-card-title-${idx}`} className="display-card-title">
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
    const genre = ownProps.genre.id
    return {
        getGenreById: () => dispatch(getGenreById(genre)),
        fetchMoviesData: (page) => dispatch(fetchMoviesData(genre, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDisplay);