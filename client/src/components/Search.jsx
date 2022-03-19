import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.submitFunc = this.submitFunc.bind(this)
  }

  handleSearch(e) {
    this.setState({
      value: e.target.value
    });
  }

  submitFunc(e) {
    e.preventDefault();
    this.props.submitter(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (   //button onSubmit wrong
    <form onSubmit={this.submitFunc}>
      <div className="search-bar">
        <input
        placeholder="Search..."
        className="input"
        type="text"
        onChange={this.handleSearch}
        value={this.state.value}
        />
        <button className="search-button" type='submit'
        >Search
        </button>
      </div>
        </form>
    );
  }

}
//add functionality to app for submit?
export default SearchBar;