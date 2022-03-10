import React from 'react';
import movies from '../components/MoviesExample.jsx';

var MovieListBuild = ({movies}) => (
  <div>
    <div>
      {movies.title}
    </div>
  </div>
)

export default MovieListBuild;