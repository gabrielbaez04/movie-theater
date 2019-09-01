import React from 'react';
import './Movie.css';
import noPoster from '../assets/images/no-poster.jpg'

function Movie({movieDetails, onPosterClick}) {
  const handlePosterClick = () => {
    onPosterClick(movieDetails);
  }
  return (
    <div onClick={handlePosterClick}>
      <img
        className="poster"
        src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}` : noPoster}
        alt={`${movieDetails.title} poster`}/>
    </div>
  );
}

export default Movie;
