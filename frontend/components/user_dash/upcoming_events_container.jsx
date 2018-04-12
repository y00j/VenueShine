import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import UpcomingEvents from 'upcoming_events';


const mapStateToProps = (state) => ({
  events: state.session.currentUser.events,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEvents);