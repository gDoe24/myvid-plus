import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../styles/videoPage.css';
import { validShowTrailerSelector } from '../../reducers/showDetailReducer';
import { getShowVideos } from '../../actions/showDetailAction';


function ShowTrailer({ show, getShowVideos, showTrailer }){

    useEffect(() => {
        getShowVideos();
    }, [])

    return(
        <div className="video-responsive">
            { show.show_videos.loading === true ? 
            <h2>Loading</h2> :
            showTrailer !== undefined ? 
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${showTrailer.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
            : 
            <h2 className="no-trailer">There is no Trailer for this Show</h2>
            }       
        </div>
    )
}

const mapStateToProps = state => {
    return {
        show: state.showDetailReducer,
        showTrailer: validShowTrailerSelector(state.showDetailReducer)
    }
}

const mapDispatchToProps = (state, ownProps) => (dispatch) => {
    return {
        getShowVideos: () => dispatch(getShowVideos(ownProps.match.params.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrailer);