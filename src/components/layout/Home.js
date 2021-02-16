import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Featured from '../movies/featured';
import Slider from './Slider';
import '../../styles/styles.css';
import store from '../../store';

function Home(){
    return(
        <Provider store={store}>
            <Fragment>
                <main>
                <Header />
                <Featured />
                <Slider />
                </main>
            </Fragment>   
        </Provider>     
    )
}

export default Home;