import React, {Fragment} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Virtual} from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../styles/displayPages.css';

SwiperCore.use([Navigation, Virtual]);

function GenreDisplay(props){

    const genres = props.genres;
    return (
            <div className="genres-row">
                <Fragment>
                    <Swiper
                    id="main"
                    key={`swiper`}
                    navigation
                    slidesPerView={6}
                    breakpoints={{
                        0:{
                            slidesPerView: 2,
                        },
                        // when window width is >= 640px
                        600: {
                          slidesPerView: 3,
                        },
                        // when window width is >= 768px
                        
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                        1400: {
                            slidesPerView: 6,
                        }
                      }}>
                        {genres.map((genre, idx) => {
                            return(
                                <SwiperSlide key={`swiperslide-${idx}`}>
                                <button className={`${idx == props.active ? `genre-box genre-active`: 
                                ` genre-box genre-deactive`}`} key={`genre-${idx}`} 
                                        onClick={() => props.handleGenre(idx)}>
                                    <p key={`${genre.title}`} className="genre-title">{genre.title}</p>
                                </button>
                                </SwiperSlide>
                                )
                        })}
                    </Swiper>
                </Fragment>         
            
        </div>
    )
}

export default GenreDisplay;