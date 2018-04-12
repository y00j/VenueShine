import React from 'react';
import { connect } from 'react-redux';
import DashBoard from './user_dash';
import { fetchCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUsername: state.session.currentUser.username,
  currentProfileImage: state.session.currentUser.profileImage
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (currentUserId) => dispatch(fetchCurrentUser(currentUserId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);