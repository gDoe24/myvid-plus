import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Virtual} from 'swiper';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';



SwiperCore.use([Navigation, Virtual]);

function HomeSlider( props ){

    const moviesReducer = props.moviesReducer;
    const showsReducer = props.showsReducer;

    const rows = [];
    var m_i = 0;
    var t_j = 0;

    for (let i = 0; i < 8; i ++)
    {
        if (i % 2 == 0){
            rows.push(moviesReducer.genres[m_i]);
            m_i ++;
        }
        else{
            rows.push(showsReducer.genres[t_j]);
            t_j ++;
        }
    }

    const slides = (
        rows.map((genre, idx) => {
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
                {genre.data.map((multi, idx) =>{
                return (
                    <SwiperSlide alt={multi.title ? multi.title 
                                                    : multi.name } 
                                 key={`slide-${idx}`} virtualIndex={`slide-${idx}`}>
                        <div key={`g-card-${idx}`} className="g-card">
                        <div key={`img-container-${idx}`}className="image-container">
                            <Link  key={`href-${idx}`} to={ multi.title ? `/movie/${multi.id}`
                                                            :`/tv/${multi.id}`}>
                            <img key={`g-card-pic-${idx}`} className="card-pic" 
                            src={`https://www.themoviedb.org/t/p/original${multi.poster_path}`} />
                            </Link>
                        </div>
                        <div key={`card-title-area-${idx}`} className="card-title-area">
                        <h4 key={`card-title-${idx}`} className="card-title">{multi.title ? multi.title : multi.name}</h4>
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
        })
    )

    return(
        <div className="album mb-5 py-5">
                <div className="album-container">
                {slides}
                </div>
                
        </div>
        
    )
}






export default HomeSlider;
