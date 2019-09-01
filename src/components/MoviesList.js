import React from 'react';
import Movie from './Movie';
import './MoviesList.css';

function MoviesList({movies, onPosterClick}) {
  return (
    <div className="moviesList">
      {movies && movies.map((movie, index) => (
        <Movie
          key={index}
          movieDetails={movie}
          onPosterClick={onPosterClick}
        />
      ))}
    </div>
  );
}

export default MoviesList;
