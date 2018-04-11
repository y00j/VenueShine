import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import TicketRegistrationForm from "./ticket_registration_form";


const mapStateToProps = state => {
  let currentEventId = state.ui.modal.eventId;
  // debugger;
  return {
    tickets: state.entities.events[currentEventId].tickets,
    currentUserId: state.session.currentUser.id,
    ticketsAvailable: state.entities.events[currentEventId].ticketsAvailable
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TicketRegistrationForm
);
