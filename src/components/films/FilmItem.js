import React from 'react';
import './FilmItem.css';

const FilmItem = (props) => {
  return (
    <div className="card" id={props.id} style={{ maxWidth: "18rem"}}>
      <i className="fa fa-times text-danger delete-film" onClick={props.onClickDelete}></i>
      <img className="card-img-top" src={props.posterurl} alt={props.title} />
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.storyline}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{props.year}</small>
        </div>
    </div>
  )
}

export default FilmItem;