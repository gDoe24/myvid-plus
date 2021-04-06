import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../styles/videoPage.css';
import { getVideos } from '../../actions/movieDetailAction';

function MovieTrailer({ movie, getVideos }){
    
    useEffect(() => {
        getVideos();
    }, [])


    return (
        <div className="video-responsive">
            { movie.movie_videos.loading == true ? 
            <h2>Loading</h2> :
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${movie.movie_videos.data[0].key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
            }       
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetailReducer
    }
}

const mapDispatchToProps = (state, ownProps) => (dispatch) => {
    return {
        getVideos: () => dispatch(getVideos(ownProps.match.params.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTrailer);