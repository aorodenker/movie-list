import React from 'react';
import MovieListBuild from '../components/MovieListBuild.jsx';

var MovieList = (props) => (
  <div>
    <div className="movie-list">{props.showWatched ? props.movies.filter((movie) => movie.watched === true).map((movie, index) =>
    <MovieListBuild index={index} movie={movie} key={movie.title} toggleWatched={props.toggleWatched}/>) :
    props.movies.filter((movie) => movie.watched === false).map((movie, index) =>
    <MovieListBuild index={index} movie={movie} key={movie.title} toggleWatched={props.toggleWatched}/>)
    }
    </div>
  </div>
);

// var MovieList = (props) => (
//   <div>
//     <div className="movie-list">{props.movies.map((movie) =>
//     <MovieListBuild movie={movie} key={movie.title}/>)}
//     </div>
//   </div>
// );

export default MovieList;