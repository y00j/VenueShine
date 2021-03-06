import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createTicketOrders } from '../../actions/ticket_order_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import TicketRegistrationForm from "./ticket_registration_form";


const mapStateToProps = state => {
  let currentEventId = state.ui.modal.eventId;
  return {
    tickets: state.entities.events[currentEventId].tickets,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createTicketOrders: (ticketOrders) => dispatch(createTicketOrders(ticketOrders))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TicketRegistrationForm
);
