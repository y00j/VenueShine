import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = state => ({
  event: {},
  ticket: {},
  formType: "Create Event",
  organizerId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  handleEvent: (event) => dispatch(createEvent(event)),
  createTicket: (ticket) => dispatch(createTicket(ticket))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);