import React, { useState } from 'react';


function Search(){

    const [search, setSearch] = useState('')

    return(
        <span className="navbar-nav mx-5">
            <i className="bi bi-search mx-2 pt-1"></i>
            <form className="home-search-form"
                  action="/search" method="get">
                <input className="home-search form-control" type="text" 
                       placeholder="Search"
                       name="query"
                       onInput={e => setSearch(e.target.value)}
                />
            </form>
        </span>
    )
}

export default Search;