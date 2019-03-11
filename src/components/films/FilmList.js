import React, { Component } from 'react'
import FilmItem from './FilmItem'
import films from '../../data/films'

class FilmList extends Component {
  state = {
    films: [...films] || []
  }

  onClickDeleteFilm = film => {
    this.setState({
      films: this.state.films.filter(f => f !== film)
    })
  }

  listFilms = () =>
    this.state.films.map((film, index) => (
      <FilmItem
        key={index}
        {...film}
        onClickDelete={this.onClickDeleteFilm.bind(this, film)}
      />
    ))

  render() {
    return <div className="card-columns">{this.listFilms()}</div>
  }
}

export default FilmList
