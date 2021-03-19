import React, { useState } from 'react';
import { useHistory } from 'react-router';


function Search(){

    const [query, setQuery] = useState('');
    const page = 1;
    const active = "movies";
    const history = useHistory();

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const  onSubmit = (e) => {
        history.push({
            pathname: '/search',
            search: "?" + new URLSearchParams({query: query, page: page, active: active})
        })
        console.log("Search");
        e.preventDefault();
    }

    return(
        <span className="navbar-nav mx-5">
            <i className="bi bi-search mx-2 pt-1"></i>
                <form onSubmit={onSubmit}>
                    <input 
                        className="home-search form-control" type="text" 
                        placeholder="Search"
                        //name="query"
                        value={query || ''}
                        onChange={handleChange}
                    />
                </form>
        </span>
    )
}

export default Search;