import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';

class App extends Component {
  render() {
    return (
      <div>
        License plates
        <SearchBar />
      </div>
    );
  }
}

export default App;
