import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/footer.css';

function Footer(){
    return(
        <Fragment>
           <div className="footer-container">
               <div className="footer-links-column">
                    <span className="footer-logo">MyVids +</span>
                    <ul>
                        <li className="personal-li">
                            <a href="#">Contact</a>
                        </li>
                        <li className="personal-li">
                            <a href="#">Portfolio</a>
                        </li>
                        <li className="personal-li">
                            <a href="#">Github</a>
                        </li>
                    </ul>
               </div>
               <div className="footer-myvid-links-column">
                    <ul>
                        <li className="myvid-link">
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li className="myvid-link">
                            <NavLink to="/" >Movies</NavLink>
                        </li>
                        <li className="myvid-link">
                            <NavLink to="/" >TV Shows</NavLink>
                        </li>
                        <li className="myvid-link">
                            <NavLink to="/" >Login/Register</NavLink>
                        </li>
                    </ul>
               </div>
               <div className="attribution">
                    <span className="provided-by">Powered By:</span>
                    <img className="movieDb-logo" src={`${process.env.PUBLIC_URL}/theMovieDb.svg`}/>
               </div>
           </div>
        </Fragment>
    );
}

export default Footer;