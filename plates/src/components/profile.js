import React, { Component } from 'react';
import { searchAction } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Profile extends Component {

  componentDidMount() {
    this.props.searchAction(this.props.match.params.id);
  }

  renderProfile () {
    return _.map(this.props.profile, comment => {
      return (
        <li key={comment}>{comment}</li>
      );
    });
  }

  render() {
    if (!_.isEmpty(this.props.profile)) {
      return (
        <ul>
          {this.renderProfile()}
        </ul>
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
