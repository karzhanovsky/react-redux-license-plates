import React, { Component } from 'react';
import { searchAction } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import AddComment from './add-comment';

class Profile extends Component {

  componentDidMount() {
    this.props.searchAction(this.props.match.params.id);
  }

  renderProfile () {
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

  render() {
    if (!_.isEmpty(this.props.profile)) {
      return (
        <div>
          <Link to='/'>Back</Link>
          <h1>{this.props.match.params.id.toUpperCase()}</h1>
          <h4>Comments:</h4>
          <ul className="comments">
            {this.renderProfile()}
          </ul>
          <AddComment />
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
  return {profile: state.search}
}

export default connect (mapStateToProps, {searchAction})(Profile);
