import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Virtual} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Virtual]);
const featuredMovies = [
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
                        <h2>Popular</h2>
                    </div>
                    <Fragment>
                    <Swiper
                        id="main" 
                        navigation
                        slidesPerView={6}
                        spaceBetween={30}
                        virtual
                        >
                        {featuredMovies.map((movie, idx) =>{
                            return (
                            <SwiperSlide alt={movie.title} key={`slide-${idx}`} virtualIndex={`slide-${idx}`}>
                                <div className="g-card">
                                <div className="image-container">
                                    <a href="#">
                                    <img className="card-pic" src={movie.image}/>
                                    </a>
                                </div>
                                <div className="card-title-area">
                                <h4 className="card-title">{movie.title}</h4>
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