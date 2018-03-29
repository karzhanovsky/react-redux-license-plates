import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRating } from '../actions';

class Rating extends Component {
  componentDidMount() {
    this.props.fetchRating(this.props.plate);
  }
  render() {
    if (typeof this.props.rating === 'object') {
    return (
        <span>{this.props.rating['rating']}</span>
    )
  } else {
    return (
        <span>{this.props.rating}</span>
    )
  }
  }
}

function mapStateToProps(state) {
  return {
    rating: state.rating
  }
}

export default connect(mapStateToProps, {fetchRating})(Rating);
