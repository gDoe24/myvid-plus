import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Virtual} from 'swiper';
import 'swiper/swiper-bundle.css';
import { getActionMovies, getAnimationMovies, getThrillerMovies, getTrending } from '../../actions/movies';

SwiperCore.use([Navigation, Virtual]);

function Slider({ moviesReducer, getTrending, getActionMovies, getAnimationMovies, getThrillerMovies }){

    useEffect(() => {
        getTrending();
    }, []);

    useEffect(() => {
        getActionMovies();
    }, []);

    useEffect(() => {
        getAnimationMovies();
    }, []);

    useEffect(() => {
        getThrillerMovies();
    }, []);

    return(
        <div className="album mb-5 py-5">
                <div className="album-container">

                { moviesReducer.genres.map((genre, idx) => {
                    return(
                    <div key={`genre-${idx}`} className="album-row">
                    <div className="album-title">
                        <h2 className="album-title-h">{genre.title}</h2>
                    </div>
                    {genre.loading == true ? <h2>Loading</h2> :
                    
                    <Fragment>
                    <Swiper
                        id="main" 
                        navigation
                        slidesPerView={7}
                        spaceBetween={20}
                        breakpoints={{
                            0:{
                                slidesPerView: 3,
                            },
                            // when window width is >= 640px
                            600: {
                              slidesPerView: 3,
                            },
                            // when window width is >= 768px
                            
                            992: {
                                slidesPerView: 5,
                            },
                            1200: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                            1400: {
                                slidesPerView: 7,
                            }
                          }}
                        virtual
                        >
                        {genre.movies.map((movie, idx) =>{
                        return (
                            <SwiperSlide alt={movie.title} key={`slide-${idx}`} virtualIndex={`slide-${idx}`}>
                                <div key={`g-card-${idx}`} className="g-card">
                                <div key={`img-container-${idx}`}className="image-container">
                                    <a key={`href-${idx}`} href="#">
                                    <img key={`g-card-pic-${idx}`} className="card-pic" 
                                    src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} />
                                    </a>
                                </div>
                                <div key={`card-title-area-${idx}`} className="card-title-area">
                                <h4 key={`card-title-${idx}`} className="card-title">{movie.title}</h4>
                                </div>
                                </div>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                        

                    </Fragment>
                }
                </div>
                    )
                })}
                
                
                </div>
                
        </div>
        
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
       getTrending: () => dispatch(getTrending()),
       getActionMovies: () => dispatch(getActionMovies()),
       getAnimationMovies: () => dispatch(getAnimationMovies()),
       getThrillerMovies: () => dispatch(getThrillerMovies())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Slider);
