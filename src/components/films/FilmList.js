import React, { Component } from 'react'
import FilmItem from './FilmItem'
import filmsData from '../../data/films.json'

class FilmList extends Component {
  state = {
    films: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ films: filmsData })
    }, 1000)
  }

  onClickDeleteFilm(film) {
    this.setState({
      films: this.state.films.filter(f => f !== film)
    })
  }

  render() {
    const filmsList = this.state.films.map((film, index) => (
      <FilmItem
        key={index}
        {...film}
        onClickDelete={() => this.onClickDeleteFilm(film)}
      />
    ))

    return (
      <div className="card-columns">
        {filmsList.length > 0 ? filmsList : 'Loading...'}
      </div>
    )
  }
}

export default FilmList
