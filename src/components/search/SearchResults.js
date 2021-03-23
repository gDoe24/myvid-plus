import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

export default function SearchResults(props)
{
    const multi = props.multi;
    const pages = props.multi.pages;
    // PAGINATION
    function createPagination(){
        let pageNumbers = [];
        for (let i = 1; i <= pages; i++) {
          pageNumbers.push(
              <span key={i}>
            <a
              className={`page-num ${i === props.page ? 'active' : ''}`}
              onClick={() => {
                  props.setPage(i);
                  } }>{i}
            </a>
            </span>
            )
        }
        return pageNumbers;
      }
    

    // SEARCH RESULTS
    const searchResults = (
        <div className="search-results">
                {multi.loading ? 
                <h2>Loading</h2>
                :
                multi.data.map((multi, idx) => {
                    return (
                        <div key={`result-${idx}`} className="result">
                            <div className="result-img-container">
                                <Link 
                                    to={multi.title ? `/movies/${multi.id}`
                                    :`/tv/${multi.id}`}
                                    >
                                    <img className="result-img" src={ multi.poster_path ?
                                        `https://www.themoviedb.org/t/p/original${multi.poster_path}`
                                        : `${process.env.PUBLIC_URL}/default-placeholder-image.png`
                                    }
                                    />
                                </Link>
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
    );
    return (
        <Fragment key={props.active}>
            {searchResults}
        </Fragment>
        
    )
}