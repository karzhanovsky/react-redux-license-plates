import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchAction(this.state.term);
    //this.setState({term: ''});
    this.setState({redirect: true});
  }

  renderSearchResult() {
    return _.map(this.props.search, search => {
      return (
        <li key={search}>{search}</li>
      )
    })
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
        onChange={this.onInputChange} />
        <button
        type='submit'
        className='btn btn-primary'>Search</button>
      </form>
      <ul>{this.renderSearchResult()}</ul>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
