import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.handleSearch(e.target.value); //handleSearch in App
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (

      <div className="search-bar">
        <input
        className="input"
        type="text"
        value={this.state.value}
        onChange={this.handleInput.bind(this)}
        />
        <button className="search-button">Search</button>
      </div>
    );
  }

}

export default SearchBar;