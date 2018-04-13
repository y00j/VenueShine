import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions/session_actions';
import UpcomingEvents from './upcoming_events';


const mapStateToProps = (state) => ({
  events: state.session.currentUser.attendingEvents,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEvents);