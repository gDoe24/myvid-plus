import React from 'react';
import {Provider} from 'react-redux';
import Header from './components/layout/Header';
import store from './store';
import Home from './components/layout/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TvDetail from './components/tvshows/tvDetail';
import MovieDetail from './components/movies/movieDetail';
import MoviesPage from './components/movies/moviesPage';
import ShowsPage from './components/tvshows/showsPage';
import SearchDisplay from './components/layout/SearchDisplay';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv/:id" render={props => <TvDetail key={props.location.key} {...props} />} />
          <Route path="/movies/:id" render={props => <MovieDetail key={props.location.key} {...props} />} />
          <Route path="/movies/" exact component={MoviesPage}/>
          <Route path="/tv/" exact component={ShowsPage}/>
          <Route path="/search" render={props => <SearchDisplay key={props.location.search}{...props} /> }/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
