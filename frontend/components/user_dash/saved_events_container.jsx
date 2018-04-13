import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../actions/session_actions";
import { fetchEvents } from "../../actions/event_actions";
import SavedEvents from "./saved_events";

const mapStateToProps = state => {
  return {
    events: state.entities.events,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedEvents);
