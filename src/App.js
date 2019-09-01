import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import axios from 'axios';
import { APIKey } from './constants';
import MovieDetails from './components/MovieDetails';

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ filteredMovies, setFilteredMovies ] = useState('');
  const [ selectedMovie, setSelectedMovie ] = useState('');
  const [ genres, setGenres ] = useState([]);
  const [ starRating, setStarRating ] = useState(0);
  const [ resetRating, setResetRating ] = useState(0);

  const fetchMovies = (url) => {
    axios.get(url).then(function (response) {
      // handle success
      setMovies(response.data.results);
      setSelectedMovie('');
      setFilteredMovies('');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
  const handleTermChange = (term) => {
    const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`;
    const query = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${term}&include_adult=false&page=1`;
    const url = !term ? discoverUrl : query; 
    fetchMovies(url);
    if (starRating) setResetRating(true);
  }

  const fetchGenres = () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}&language=en-US`;
    axios.get(url).then(function (response) {
    // handle success
    setGenres(response.data.genres);
  })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
  }

  const onPosterClick = (selectedMovie) => {
    setSelectedMovie(selectedMovie);
  }

  const onBackClick = () => {
    setSelectedMovie('');
  }

  const onStarClick = (stars) => {
    if (!movies) return;
    if (stars === starRating) {
      setResetRating(true);
      setFilteredMovies('');
      return;
    }
    setResetRating(false);
    const filteredArr = movies.filter(m => m.vote_average <= stars * 2);
    setStarRating(stars);
    setFilteredMovies(filteredArr);
  }

  useEffect(() => {
    fetchGenres();
    handleTermChange();
  }, []);
  return (
    <div className="App">
      <Header
        onTermChange={handleTermChange}
        selectedMovie={selectedMovie}
        onBackClick={onBackClick}
        onStarClick={onStarClick}
        starRating={starRating}
        reset={resetRating}
      />
      {selectedMovie ?
      <MovieDetails
        onBackClick={onBackClick}
        movieDetails={selectedMovie}
        genres={genres}
      />
      : 
      <MoviesList 
        movies={filteredMovies || movies}
        onPosterClick={onPosterClick}
      />
      }
    </div>
  );
}

export default App;
