import React, { useState } from 'react';
import {connect} from 'react-redux';
import GenreDisplay from '../layout/genresDisplay';
import ShowsDisplay from './showsDisplay';

function ShowsPage({ shows }){

    const [active, setActive] = useState(1);

    const handleGenre = (id) => {
        setActive(id)
    }

    return (
        <div className="display-main">
            <h1>TV Shows Page</h1>
            <GenreDisplay handleGenre={handleGenre}
                          genres={shows.genres} active={active}/>
           <ShowsDisplay genre={shows.genres[active]} key={shows.genres[active].id}/>
        </div>
    )
};


const mapStateToProps = state =>{
    return {
        shows: state.showsReducer
    }
}

export default connect(mapStateToProps)(ShowsPage);