import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import store from './store';
import Home from './components/layout/Home';
import ScrollToTop from './components/layout/ScrollToTop';
import TvDetail from './components/tvshows/tvDetail';
import MovieDetail from './components/movies/movieDetail';
import MoviesPage from './components/movies/moviesPage';
import ShowsPage from './components/tvshows/showsPage';
import SearchDisplay from './components/search/SearchDisplay';
import movieTrailer from './components/movies/movieTrailer';
import Footer from './components/layout/Footer';
import ShowTrailer from './components/tvshows/ShowTrailer';

function App() {
  

  return (
    <Provider store={store}>
      <Router >
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv/:id/video" exact component={ShowTrailer} />
          <Route path="/tv/:id" render={props => <TvDetail key={props.location.key} {...props} />} />
          <Route path="/movies/:id/video" exact component={movieTrailer} />
          <Route path="/movies/:id" render={props => <MovieDetail key={props.location.key} {...props} />} />
          <Route path="/movies/" exact component={MoviesPage}/>
          <Route path="/tv/" exact component={ShowsPage}/>
          <Route path="/search" render={props => <SearchDisplay key={props.location.search} {...props} /> }/>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
