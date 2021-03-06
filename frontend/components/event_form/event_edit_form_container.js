import React from "react";
import { connect } from "react-redux";
import EventForm from "./event_form";
import { updateEvent, fetchEvent } from "../../actions/event_actions";

const mapStateToProps = (state, ownProps) => {
  
  return({
    
    event: state.entities.events[ownProps.match.params.eventId] || {},
    formType: "Edit Event",
    organizerId: state.session.currentUser.id
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchEvent: (event) => dispatch(fetchEvent(event)),
    handleEvent: (event, id) => dispatch(updateEvent(event, id)),
  });
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(EventForm);
