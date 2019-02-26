import React from 'react'
import './FilmItem.css'
import FilmGenre from './FilmGenre'

const MIN_SPECIAL_FILM_RATING = 6

const getGenres = genres =>
  !genres
    ? []
    : genres.map((genre, index) => <FilmGenre key={index} genre={genre} />)

const getRatings = ratings =>
  !ratings
    ? undefined
    : ratings
        .reduce((acc, rating, i, ratings) => {
          acc += rating
          if (i === ratings.length - 1) {
            acc /= ratings.length
          }
          return acc
        }, 0)
        .toFixed(1)

const FilmItem = ({
  ratings,
  genres,
  id,
  posterurl,
  title,
  storyline,
  year,
  onClickDelete
}) => (
  <div
    className={
      'card ' + (getRatings(ratings) > MIN_SPECIAL_FILM_RATING && 'bg-warning')
    }
    id={id}
    style={{ maxWidth: '18rem' }}
  >
    <i
      className="fa fa-times text-danger delete-film"
      onClick={onClickDelete}
    />
    <img className="card-img-top" src={posterurl} alt={title} />
    <div className="card-body">
      <div className="film-genres">{getGenres(genres)}</div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{storyline}</p>
    </div>
    <div className="card-footer d-flex justify-content-between">
      <small className="text-muted">{year}</small>
      {getRatings(ratings) && (
        <small className="text-muted">
          {getRatings(ratings)} <i className="fa fa-star text-warning" />
        </small>
      )}
    </div>
  </div>
)

export default FilmItem
