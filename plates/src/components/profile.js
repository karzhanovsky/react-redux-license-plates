import React, { Component } from 'react';
import { searchAction, fetchRating } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import AddComment from './add-comment';
import SearchBar from '../containers/search-bar';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  componentDidMount() {
    this.props.searchAction(this.props.match.params.id);
    this.props.fetchRating(this.props.match.params.id);
  }

  renderComments() {
    if (typeof this.props.profile === 'object') {
      return _.map(this.props.profile, comment => {
        return (
          <li key={comment} className="single-comment">{comment}</li>
        );
      });
    } else {
      return <li><p>{this.props.profile}</p></li>
    }
  }
  renderRating() {
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

  render() {
    if (!_.isEmpty(this.props.profile)) {
      return (
        <div>
          <SearchBar/>
          <Link to='/'>Back</Link>
          <h1>{this.props.match.params.id.toUpperCase()}</h1>
          Rating: {this.renderRating()}
          <h4>Comments:</h4>
          <ul className="comments">
            {this.renderComments()}
          </ul>
          <AddComment plate={this.props.match.params.id.toUpperCase()}/>
        </div>
      )
    }
    return (
      <div>
        Loading...
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {profile: state.search, rating: state.rating}
}

export default connect (mapStateToProps, {searchAction, fetchRating})(Profile);
