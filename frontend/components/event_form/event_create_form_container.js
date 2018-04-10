import React from 'react';
import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  event: {}
});

const mapDispatchToProps = (dispatch) => ({
  handleEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);