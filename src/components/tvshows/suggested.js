import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Virtual} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Virtual]);

export default function Suggested(props) {
    const suggested = props.suggested;
    console.log(suggested);
    return(
        <div className="sugg-album-row album-row">
            <div className="album-title sugg-album-title">
                <h2 className="album-title-h sugg-album-title-h">{`Similar to ${props.name}`}</h2>
            </div>
            
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
                {suggested.map((multi, idx) =>{
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
        </div>
    )
}