import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchMovies, searchShows } from '../../actions/search';
import { Link } from 'react-router-dom';
import SelectSearch from './SelectSearch';
import '../../styles/search.css';

/* DISPLAY COMPONENT FOR WHEN USER SEARCHES. */

function SearchDisplay({ multi, searchMovies, searchShows }){

    const { search } = window.location;
    const query = new URLSearchParams(search).get('query');

    const replaceWhitespace = (searchTerm) => {
        return searchTerm.replace(" ", "%20");
    }

    var dbFriendly = replaceWhitespace(query);
    const [page, setPage] = useState(1)
    const [active, setActive] = useState("movies")

    useEffect(() => {
        searchMovies(dbFriendly, page);
    }, [])

    useEffect(() => {
        if (active == "movies")
        {
            setPage(1);
            searchMovies(dbFriendly, page);
        }
        else{
            setPage(1);
            searchShows(dbFriendly, page);
        }
    }, [active])

    useEffect(() => {
        if (active == "movies")
        {
            searchMovies(dbFriendly, page);
        }
        else{
            searchShows(dbFriendly, page);
        }
    }, [page])

    const handleClick = (id) => {
        setActive(id);
    };

    function createPagination(){
        let pageNumbers = [];
        for (let i = 1; i <= multi.pages; i++) {
          pageNumbers.push(
            <span
              key={i}
              className={`page-num ${i === page ? 'active' : ''}`}
              onClick={() => {setPage(i)}}>{i}
            </span>)
        }
        return pageNumbers;
      }
    
    return(
        <div className="search-container">
            <SelectSearch handleClick={handleClick}
                            active={active}/>
            <div className="search-results">
                {multi.data.map((multi, idx) => {
                    return (
                        <div key={`result-${idx}`} className="result">
                            <div className="result-img-container">
                            <img className="result-img" src={ multi.poster_path ?
                                `https://www.themoviedb.org/t/p/original${multi.poster_path}`
                                : `${process.env.PUBLIC_URL}/default-placeholder-image.png`
                            }
                            />
                            </div>
                            <div className="result-info">
                                <Link className="result-title" 
                                    to={ multi.title ? `/movies/${multi.id}`
                                                        :`/tv/${multi.id}`}>
                                        {multi.title? multi.title : multi.name}
                                </Link>
                                <p className="result-release-date">
                                    {multi.release_date}
                                </p>
                                <p className="result-overview">
                                    {multi.overview}
                                </p>
                            </div>
                        </div>
                        
                        )
                })}
                <div className="pagination">
                    {createPagination()}
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
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