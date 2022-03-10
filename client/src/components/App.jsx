import React from 'react';
import MovieList from '../components/MovieList.jsx';
import movies from '../components/MoviesExample.jsx';
import SearchBar from '../components/Search.jsx';
import UserMovies from '../components/UserMovies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };
    this.addMovies = this.addMovies.bind(this);
    this.checkList = this.checkList.bind(this);
  }
  addMovies(userAdd) {
    this.setState({
      movies: userAdd
    })
  }

  checkList(submit) {
    var filteredList = movies.filter((currentMovie) => currentMovie.title.includes(submit) || submit === '')
      this.setState({
        movies: filteredList
      })
  }

  render() {
    return (
      <div>
        <div className="title">Movie List</div>
        <div className="search-div">
          <SearchBar handleSearch={this.checkList.bind(this)} />
          </div>
        <div className="movielist"><MovieList movies={this.state.movies} /></div>
        <div className='add-movies'>
          <UserMovies handleSubmit={this.addMovies.bind(this)}/>
        </div>
      </div>
    );
  }
};

export default App;