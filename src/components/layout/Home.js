import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Featured from '../movies/featured';
import '../../styles/styles.css';
import { getActionMovies, getAnimationMovies, getThrillerMovies, getTrending } from '../../actions/movies';
import { getActionShows, getComedyShows, getSciFiShows, getTrendingShows } from '../../actions/shows';
import HomeSlider from './HomeSlider';


function Home({ moviesReducer, showsReducer, getTrending, getActionMovies,getAnimationMovies, getThrillerMovies, 
              getTrendingShows, getActionShows, getComedyShows, getSciFiShows,}){

    useEffect(() => {
        getTrending('all');
        getActionMovies();
        getAnimationMovies();
        getThrillerMovies();
        getTrendingShows();
        getActionShows();
        getComedyShows();
        getSciFiShows();
    }, []);

    return(
        <Fragment>
            <main>
            <Featured />
            <HomeSlider moviesReducer={moviesReducer}
                        showsReducer={showsReducer} />
            </main>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return{
        moviesReducer: state.moviesReducer,
        showsReducer: state.showsReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
       getTrending: (media_type) => dispatch(getTrending(media_type)),
       getActionMovies: () => dispatch(getActionMovies()),
       getAnimationMovies: () => dispatch(getAnimationMovies()),
       getThrillerMovies: () => dispatch(getThrillerMovies()),
       getTrendingShows: () => dispatch(getTrendingShows()),
       getActionShows: () => dispatch(getActionShows()),
       getComedyShows: () => dispatch(getComedyShows()),
       getSciFiShows: () => dispatch(getSciFiShows())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);