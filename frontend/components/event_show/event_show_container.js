import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventShow from './event_show';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return(
    {
      event: state.entities.events[ownProps.match.params.eventId],
      modal: state.ui.modal
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  openModal: (modal, eventId) => dispatch(openModal(modal, eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);