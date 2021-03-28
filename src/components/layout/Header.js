import React, { Fragment } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Search from '../search/Search';

function Header(){

    return(
        <Fragment>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">MyVids Plus</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/movies/" className="nav-link">Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/tv/" className="nav-link" tabIndex="-1" style={{width: "100px"}}
                             aria-disabled="true">TV Shows</NavLink>
                </li>
                <Search />
                </ul>
                <ul className="navbar-nav mx-5">
                    <li className="nav-item">
                        <a className="login nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="login nav-link">Register</a>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </header>
        </Fragment>
  );
}

export default Header;
