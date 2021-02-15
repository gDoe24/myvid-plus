import React, { Fragment } from 'react';

function Header(){
    return(
        <Fragment>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">MyVids Plus</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <a className="nav-link disabled" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">TV Shows</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Upcoming</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown04">
                    <li><a className="dropdown-item" href="#">Movies</a></li>
                    <li><a className="dropdown-item" href="#">TV Shows</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <span className="navbar-nav mx-5">
                <i className="bi bi-search mx-2 pt-1"></i>
                <form className="home-search-form ">
                    <input className="home-search form-control " type="text" placeholder="Search" />
                </form>
                </span>
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
