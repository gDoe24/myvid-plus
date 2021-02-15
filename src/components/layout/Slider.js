import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Virtual, breakpoi} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Virtual]);
const featuredMovies = [
    {
     title: "Tenet",
     image: 'https://www.themoviedb.org/t/p/original//k68nPLbIST6NP96JmTxmZijEvCA.jpg',
    },
    {
     title: "Your Name.",
     image: 'https://www.themoviedb.org/t/p/original/a954X8xMnukqMracTipsK3T5lD3.jpg'
    },
    {
     title: "Demon Slayer: Infinity Train",
     image: 'https://www.themoviedb.org/t/p/original//yF45egpHwaYLn4jTyZAgk0Cmug9.jpg'
    },
    { 
     title: "Soul",
     image: 'https://www.themoviedb.org/t/p/original/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
     backdrop: '/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg'
    },
    {
     title: "The Dark Knight Rises",
     image: 'https://www.themoviedb.org/t/p/original//vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg'
    },
    {
        title: "Avengers: Endgame",
        image: 'https://www.themoviedb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg'
       },
       {
        title: "Tenet",
        image: 'https://www.themoviedb.org/t/p/original//k68nPLbIST6NP96JmTxmZijEvCA.jpg'
       },
       {
        title: "Your Name.",
        image: 'https://www.themoviedb.org/t/p/original/a954X8xMnukqMracTipsK3T5lD3.jpg'
       },
       {
        title: "Demon Slayer: Infinity Train",
        image: 'https://www.themoviedb.org/t/p/original//yF45egpHwaYLn4jTyZAgk0Cmug9.jpg'
       },
       { 
        title: "Soul",
        image: 'https://www.themoviedb.org/t/p/original/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg'
       },
       {
        title: "The Dark Knight Rises",
        image: 'https://www.themoviedb.org/t/p/original//vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg'
       },
       {
           title: "Avengers: Endgame",
           image: 'https://www.themoviedb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg'
          },
    ];

function Slider(){

    return(
        <div className="album py-5">
            
                <div className="album-container">
                <div className="album-row">
                    <div className="album-title">
                        <h2 className="album-title-h">Popular</h2>
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
                        {featuredMovies.map((movie, idx) =>{
                            return (
                            <SwiperSlide alt={movie.title} key={`slide-${idx}`} virtualIndex={`slide-${idx}`}>
                                <div key={`g-card-${idx}`} className="g-card">
                                <div key={`img-container-${idx}`}className="image-container">
                                    <a key={`href-${idx}`} href="#">
                                    <img key={`g-card-pic-${idx}`} className="card-pic" src={movie.image}/>
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
                </div>

                </div>
                
        </div>
    )
}

export default Slider;