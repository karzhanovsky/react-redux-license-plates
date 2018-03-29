import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../actions/';
import { Redirect } from 'react-router';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state={term: '', redirect: false};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value.toUpperCase()});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchAction(this.state.term);
    //this.setState({term: ''});
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to = {'/plate/' + this.state.term} />
    }
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
        <input
        className='form-control'
        value={this.state.term}
        placeholder="Search for a licence plate"
        onChange={this.onInputChange} />
        <button
        type='submit'
        className='btn btn-primary'>Search</button>
      </form>
      </div>
    );
  };
}

export default connect(null, {searchAction})(SearchBar);
