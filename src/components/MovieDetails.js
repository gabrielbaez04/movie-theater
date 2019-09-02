import React, { useState, useEffect } from 'react';
import './MovieDetails.css';
import noPoster from '../assets/images/no-poster.jpg'
function MovieDetails({movieDetails, onBackClick, genres}) {
  const handleBackClick = () => {
    onBackClick();
  }
  return (
    <div>
      <div className="detail-container">
        <img
          className="detail-poster"
          // validation, if there's no backdrop, then use poster, if there's no poster then use placeholder.
          src={movieDetails && movieDetails.backdrop_path 
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}` 
            : 
              movieDetails && movieDetails.poster_path ? 
              `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : noPoster}
          alt={`${movieDetails ? movieDetails.title: 'movie'} poster`}/>
        <div className="details-info">
          <span className="details-title">{`${movieDetails.title} (${movieDetails.release_date.split('-')[0]})`}</span>
          <div className="d-flex">
            {movieDetails.genre_ids && movieDetails.genre_ids.map((genre, index) => (
              <div key={index} className="genre">{genres.find(g => g.id === genre).name}</div>
            ))}
          </div>
          <div><i className="fa fa-star star" aria-hidden="true"></i>{`Rating: ${movieDetails.vote_average} (${movieDetails.vote_count} Votes)`}</div>
          <div>
            <br/>
            {movieDetails.overview}
            <br/>
            <br/>
          </div>
          <div><i className="fa fa-calendar" aria-hidden="true"/>{` Release Date: ${movieDetails.release_date}`}</div>
        </div>
      </div>
      <button className="detail-back-button" onClick={handleBackClick}>Back to list</button>
    </div>
  );
}

export default MovieDetails;
