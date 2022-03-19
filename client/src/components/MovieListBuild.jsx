import React from 'react';

var MovieListBuild = (props) => (
  <div>
    <div>
      {props.movie.title}
    </div>
    <button className='watchedtoggle'
    onClick={() => {props.toggleWatched(props.index)}}
    >Watched</button>
  </div>
)

export default MovieListBuild;