import React, { Fragment } from 'react';

import Footer from './Footer';
import Featured from '../movies/featured';
import Slider from './Slider';
import '../../styles/styles.css';

function Home(){
    return(
        <Fragment>
            <main>
            <Featured />
            <Slider />
            </main>
        </Fragment>
    )
}

export default Home;