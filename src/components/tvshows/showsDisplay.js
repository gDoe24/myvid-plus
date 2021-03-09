import React, { useEffect, useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getShowGenreById, fetchData } from '../../actions/shows';

function ShowsDisplay({props, shows, getShowGenreById, fetchData}){
    
    const [isBottom, setIsBottom] = useState(false);
    const [page, incrementPage] = useState(2);

    useEffect(() => {
        getShowGenreById();
        window.addEventListener('scroll', infinteLoop);
    }, [])

    useEffect(() => {
        if (isBottom){
            fetchData(page);
            incrementPage(page + 1);
            setIsBottom(false);
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
        <div key={`shows-${genre.title}`} className="shows-container">
        <h1>{genre.title}</h1>
        <div key={`genre-${genre.title}`} className="display-album-container">
        {genre.id == 0 ? 
            <h1>Popular Shows</h1>
            :
        
            shows.genre_by_id.loading ?
            <h3>Loading</h3> :
            
            shows.genre_by_id.data.map((show, idx) => {
                return (
                    <div key={`display-g-card-${idx}`} className="display-g-card">
                        <Link  key={`href-${idx}`} to={ show.name ? `/tv/${show.id}`
                                                            :`/tv/${show.id}`}>
                        <div key={`display-img-container-${idx}`}className="display-image-container">
                            
                            <img key={`display-g-card-pic-${idx}`} className="display-card-pic" 
                            src={`https://www.themoviedb.org/t/p/original${show.poster_path}`} />
                        </div>
                        </Link>
                        <div key={`display-card-overlay-${idx}`} className="display-card-overlay">
                            <h4 key={`display-card-title-${idx}`} className="display-card-title">
                                {show.name}
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
        shows: state.showsReducer,
        props: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getShowGenreById: () => dispatch(getShowGenreById(ownProps.genre.id, 1)),
        fetchData: (page) => dispatch(fetchData(ownProps.genre.id, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsDisplay);