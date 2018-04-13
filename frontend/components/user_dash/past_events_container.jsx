import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../actions/session_actions";
import PastEvents from "./past_events";





const mapStateToProps = state => {
  
  // const getPastEvents = () => {
  //   let events = this.props.events;
  //   let pastEvents = [];
  //   for (let event in events) {
  //     if (events[event].pastEvent === true) {
  //       pastEvents.push(events[event]);
  //     }
  //   }

  //   return pastEvents;
  // };
  
  return ({
    events: state.session.currentUser.attendingEvents,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PastEvents);
