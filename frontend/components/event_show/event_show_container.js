import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger;
  return(
    {
      event: state.entities.events[ownProps.match.params.eventId]
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);