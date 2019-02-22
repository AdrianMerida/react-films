import React, { Component, Fragment } from 'react';
import films from './data/films.json';
import FilmList from './components/films/FilmList';
import Header from './components/misc/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FilmList films={films} />
            </div>
          </div>
        </div>
      </Fragment>
      
    );
  }
}

export default App;
