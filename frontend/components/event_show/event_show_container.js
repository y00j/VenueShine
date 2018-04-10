import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventShow from './event_show';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
  return(
    {
      event: state.entities.events[ownProps.match.params.eventId]
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);