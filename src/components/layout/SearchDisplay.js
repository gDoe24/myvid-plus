import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchMovies, searchShows } from '../../actions/search';
import { Link, useHistory, useLocation, withRouter } from 'react-router-dom';
import SelectSearch from './SelectSearch';
import '../../styles/search.css';

/* DISPLAY COMPONENT FOR WHEN USER SEARCHES. */

function SearchDisplay({ location, multi, searchMovies, searchShows }){
    console.log(location);
    
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
        console.log("page");
        currentUrlParams.set('page', page);
        currentUrlParams.set('active', active);
        if (active == "movies")
        {
            searchMovies(dbFriendly, page);
        }
        else{
            searchShows(dbFriendly, page);
        }
        
        history.push(window.location.pathname + "?" + currentUrlParams);
    }, [page, active])

    const handleClick = (id) => {
        setActive(id);
        setPage(1);
    };

    function createPagination(){
        let pageNumbers = [];
        for (let i = 1; i <= multi.pages; i++) {
          pageNumbers.push(
              <span>
            <a
              key={i}
              className={`page-num ${i === page ? 'active' : ''}`}
              onClick={() => {
                  setPage(i);
                  } }>{i}
            </a>
            </span>
            )
        }
        return pageNumbers;
      }
    
    return(
        <div className="search-container">
            <SelectSearch handleClick={handleClick}
                            active={active}/>
            <div className="search-results">
                {multi.loading ? 
                <h2>Loading</h2>
                :
                multi.data.map((multi, idx) => {
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

const mapStateToProps = (state, ownProps) => {
    return {
        location: ownProps,
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