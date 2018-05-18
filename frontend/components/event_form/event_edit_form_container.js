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
    handleEvent: (event, id) => dispatch(updateEvent(event, id)),
    fetchEvent: (id) => dispatch(fetchEvent(id))
  });
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(EventForm);
