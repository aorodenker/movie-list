import React from 'react';

class UserMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleNewMovies = this.handleNewMovies.bind(this);
  }

  handleNewMovies(val) {
    var add = this.props.handleSubmit(val.target.value)
    this.setState({
      value: add
    });
  }

  render() {
    return (

      <div className='user-bar'>
        <input
          className='user-movies'
          type='text'
          value={this.state.value}
          onChange={this.handleNewMovies.bind(this)}
        />
        <button className='user-data'>Add Movie</button>
      </div>
    );
  }
}

export default UserMovies;