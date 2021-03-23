import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchMovies, searchShows } from '../../actions/search';
import {useHistory, useLocation} from 'react-router-dom';
import SelectSearch from './SelectSearch';
import SearchResults from './SearchResults';
import '../../styles/search.css';

/* DISPLAY COMPONENT FOR WHEN USER SEARCHES. */

function SearchDisplay({ multi, searchMovies, searchShows }){
    
    let currentUrlParams= new URLSearchParams(useLocation().search);
    const currentQuery = currentUrlParams.get('query');
    
    const replaceWhitespace = (searchTerm) => {
        return searchTerm.replace(" ", "%20");
    }
    var dbFriendly = replaceWhitespace(currentQuery);

    const currentPage = currentUrlParams.get('page');
    const currentActive = currentUrlParams.get('active');

    const [page, setPage] = useState(currentPage);
    const [active, setActive] = useState(currentActive);
    
    let history = useHistory();


    useEffect(() => {
        currentUrlParams.set('page', page);
        currentUrlParams.set('active', active);
        
        searchMovies(dbFriendly, page);
        searchShows(dbFriendly, page);

        history.push(window.location.pathname + "?" + currentUrlParams);
    }, [page, active])

    const handleClick = (id) => {
        setActive(id);
        setPage(1);
    };
    const movies = multi.movies;
    const shows = multi.shows;

    const activeType = active == "movies" ? movies : shows;
    const moviesTotal = multi.total_movies;
    const showsTotal = multi.total_shows
    
    
    return(
        <div className="search-container">
            <SelectSearch 
                    handleClick={handleClick}
                    active={active}
                    movieTotal={moviesTotal}
                    showTotal={showsTotal}
                    />
            <SearchResults 
                    multi={activeType}
                    active={active}
                    page={page}
                    setPage={setPage}/>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        multi: state.searchReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (query, page) => dispatch(searchMovies(query, page)),
        searchShows: (query, page) => dispatch(searchShows(query, page))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchDisplay);