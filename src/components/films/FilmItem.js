import React from 'react';

const FilmItem = (props) => {
  return (
    <div class="card" id={props.id} style={{ maxWidth: "18rem"}}>
      <img class="card-img-top" src={props.posterurl} alt={props.title} />
        <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.storyline}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{props.year}</small>
        </div>
    </div>
  )
}

export default FilmItem