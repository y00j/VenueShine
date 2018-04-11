import React from "react";
import { connect } from "react-redux";
import EventForm from "./event_form";
import { updateEvent } from "../../actions/event_actions";

const mapStateToProps = (state, ownProps) => {
  return({
    event: state.entities.events[ownProps.match.params.eventId]
  });

};

const mapDispatchToProps = dispatch => {
  return ({
    handleEvent: (event, id) => dispatch(updateEvent(event, id))
  });
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(EventForm);
