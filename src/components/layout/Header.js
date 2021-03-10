import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

function Header(){
    return(
        <Fragment>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">MyVids Plus</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/" className="nav-link disabled" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/movies/" className="nav-link" >Movies</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tv/" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">TV Shows</Link>
                </li>
              {/*  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Upcoming</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown04">
                    <li><a className="dropdown-item" href="#">Movies</a></li>
                    <li><a className="dropdown-item" href="#">TV Shows</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                */}
                <Search />
                </ul>
                <ul className="navbar-nav mx-5">
                    <li className="nav-item">
                        <a className="login nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="login nav-link" href="#">Register</a>
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
