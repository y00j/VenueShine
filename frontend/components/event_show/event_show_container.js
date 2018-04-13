import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventShow from './event_show';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { toggleBookmark } from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
  const isBookmarked = state.session.currentUser.bookmarks.includes(parseInt(ownProps.match.params.eventId));
  return(
    {
      event: state.entities.events[ownProps.match.params.eventId],
      modal: state.ui.modal,
      isBookmarked: isBookmarked
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  openModal: (modal, eventId) => dispatch(openModal(modal, eventId)),
  toggleBookmark: (id) => dispatch(toggleBookmark(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);