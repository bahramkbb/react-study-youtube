import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.props.handleSearchTermChange(event.target.value)}
          />
      </div>
    )
  }
}
export default SearchBar;
