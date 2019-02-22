import React, { Component, Fragment } from 'react';
import FilmItem from './components/films/FilmItem';
import films from './data/films.json';

class App extends Component {
  render() {
    return (
      <FilmItem {...films[0]} />
    );
  }
}

export default App;
