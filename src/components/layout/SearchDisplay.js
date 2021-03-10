import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchMovies, searchShows } from '../../actions/search';
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
            searchMovies(dbFriendly, page);
        }
        else{
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
            {multi.data.map((multi, idx) => {
                return (
                    <h2 key={`multi-${idx}`}>
                    {multi.title? multi.title : multi.name}
                    </h2>
                    )
            })}
            <div className="pagination">
                {createPagination()}
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