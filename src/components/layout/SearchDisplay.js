import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMulti } from '../../actions/search';

function SearchDisplay({ multi, searchMulti }){

    const { search } = window.location;
    const query = new URLSearchParams(search).get('query');
    const replaceWhitespace = (searchTerm) => {
        return searchTerm.replace(" ", "%20");
    }
    var dbFriendly = replaceWhitespace(query);

    useEffect(() =>{
        searchMulti(dbFriendly);
    }, [])

    return(
        <h1>Search Display Page</h1>
    )
}

const mapStateToProps = state => {
    return {
        multi: state.searchReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMulti: (query) => dispatch(searchMulti(query))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchDisplay);