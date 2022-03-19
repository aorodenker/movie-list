import React from 'react';

class UserMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleNewMovies = this.handleNewMovies.bind(this);
    this.movieAdding = this.movieAdding.bind(this);
  }

  handleNewMovies(event) {
    event.preventDefault();
    // var add = this.props.handleSubmit(val.target.value)
    this.setState({
      value: event.target.value
    });
  }

  movieAdding(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.movieAdding}>
        <input
        placeholder='add a movie'
        className='user-movies'
        type='text'
        onChange={this.handleNewMovies}
        value={this.state.value}
        />
        <button type='submit' className='user-data'>+</button>
        </form>
    );
  }
}

export default UserMovies;