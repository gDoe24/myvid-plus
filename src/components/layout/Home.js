import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Featured from '../movies/featured';
import Slider from './Slider';
import '../../styles/styles.css';

function Home(){
    return(
        <Fragment>
            <main>
            <Header />
            <Featured />
            <Slider />
            </main>
        </Fragment>        
    )
}

export default Home;