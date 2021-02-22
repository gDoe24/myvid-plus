import React from 'react';
import {Provider} from 'react-redux';
import Header from './components/layout/Header';
import store from './store';
import Home from './components/layout/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TvDetail from './components/tvshows/tvDetail';
import MovieDetail from './components/movies/movieDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv/:id" component={TvDetail} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
