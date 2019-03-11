import React from 'react'

const colorOptions = {
  action: 'danger',
  romance: 'danger',
  animation: 'danger',
  fantasy: 'success',
  adventure: 'success',
  drama: 'secondary',
  crime: 'warning',
  horror: 'warning'
}

const getGenreColor = genre => colorOptions[genre.toLowerCase()] || 'info'

const FilmGenre = ({ genre }) => (
  <span className={`badge mr-1 badge-${getGenreColor(genre)}`}>{genre}</span>
)

export default FilmGenre
