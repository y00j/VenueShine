import React from 'react';
import { connect } from 'react-redux';
import TicketForm from './ticket_form';
import { withRouter } from 'react-router-dom';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    tickets: state.entities.events[ownProps.match.params.eventId].tickets
  });
};

const mapDispatchToProps = (dispatch) => ({
  createticket: (ticket) => dispatch(createTicket(ticket))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketForm);

//will probably not need this