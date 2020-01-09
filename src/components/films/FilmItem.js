import React from 'react'
import './FilmItem.css'

const FilmItem = ({
  id,
  posterurl,
  title,
  storyline,
  year,
  onClickDelete
}) => (
  <div className="FilmItem card" id={id} style={{ maxWidth: '18rem' }}>
    <i className="fa fa-times text-danger delete-film" onClick={onClickDelete} />

    <img className="card-img-top" src={posterurl} alt={title} />

    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{storyline}</p>
    </div>

    <div className="card-footer d-flex justify-content-between">
      <small className="text-muted">{year}</small>
    </div>
  </div>
)

export default FilmItem
