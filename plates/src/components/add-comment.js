import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCommentAction } from '../actions';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.setState({term: ''});
    this.props.addCommentAction(this.props.plate, this.state.term);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input value={this.state.term} placeholder="Add a comment" onChange={this.onInputChange} className='form-control' />
        <button type='submit' className='btn btn-primary'>Add</button>
      </form>
      </div>
    )
  }
}

export default connect(null, {addCommentAction})(AddComment);
