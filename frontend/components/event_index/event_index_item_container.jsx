import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { toggleBookmark } from '../../actions/bookmark_actions';
import EventIndexItem from './event_index_item';
import { fetchEvent} from "../../actions/event_actions";

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = dispatch => ({
  toggleBookmark: id => dispatch(toggleBookmark(id)),
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexItem);