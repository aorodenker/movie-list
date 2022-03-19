import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './Search.jsx';
import UserMovies from './UserMovies.jsx';

////////////////////////STYLE//////////////////////////////

var buttonStyle = {
  color: 'blue'
}

////////////////////////STYLE//////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      showWatched: true
    };
    this.addMovies = this.addMovies.bind(this);
    this.submit = this.submit.bind(this);
    this.watchedHandler = this.watchedHandler.bind(this);
    this.toWatchHandler = this.toWatchHandler.bind(this);
    // this.toggleWatched = this.toggleWatched.bind(this);
  }

  addMovies(userAdd) {
    var added = this.state.movies;
    added.push({title: userAdd, watched: false});
    this.setState({
      movies: added,
      toWatch: added
    })
  }

  submit(userInput) {
    var filteredList = this.state.movies.filter((currentMovie) => currentMovie.title.includes(userInput))
      this.setState({
        movies: filteredList
      })
  }
  watchedHandler() {
   this.setState({
     showWatched: true
   })
  }

  toWatchHandler() {
    this.setState({
      showWatched: false
    })
  }

  toggleWatched(ind) {
    this.state.movies[ind].watched = this.state.movies[ind].watched ? !this.state.movies[ind].watched : true;
    this.setState({
      movies: [...this.state.movies]
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">Movie List</h1>
        <button className='watched'
        style={buttonStyle}
          onClick={this.watchedHandler}
          >Watched
        </button>
        <button className='towatch'
          onClick={this.toWatchHandler}
          >To Watch
        </button>
        <div className='add-movies'>
          <UserMovies handleSubmit={this.addMovies}/>
        </div>
        <div className="search-div">
          <SearchBar submitter={this.submit} />
        </div>
        <div className="movieList">
          <MovieList movies={this.state.movies}
          showWatched={this.state.showWatched}
          toggleWatched={this.toggleWatched.bind(this)}
          />
        </div>
      </div>
    );
  }
};

export default App;