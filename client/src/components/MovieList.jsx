import React from 'react';
import MovieListBuild from '../components/MovieListBuild.jsx';

var MovieList = ({movies, userAdd}) => (
  // !movies ? <div className="movie-list">{userAdd}</div> :
  <div className="movie-list">
    {movies.map(movies => <MovieListBuild movies={movies}/>)}
  </div>
);

export default MovieList;

//try changing arg