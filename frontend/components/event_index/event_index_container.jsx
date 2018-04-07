import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvent, fetchEvents } from '../../actions/event_actions';


const mapStateToProps = (state) => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);