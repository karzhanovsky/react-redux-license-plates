import React, { Component } from 'react';
import { searchAction } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Profile extends Component {

  componentDidMount() {
    this.props.searchAction(this.props.match.params.id);
  }

  renderProfile () {
    if (typeof this.props.profile === 'object') {
      return _.map(this.props.profile, comment => {
        return (
          <li key={comment}>{comment}</li>
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
          <h1>{this.props.match.params.id.toUpperCase()}</h1>
          <ul>
            {this.renderProfile()}
          </ul>
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
