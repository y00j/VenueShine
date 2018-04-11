import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
// import 


class EventRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      ticket_id: "",
      quantity: 0
    };
  }


  render() {
    return(
      <form>
        {this.props.tickets.map((ticket) => (
          
          <div>{ticket.price}</div>

        ))}
        
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  let currentEventId = state.ui.modal.eventId;
  // debugger;
  return ({
    tickets: state.entities.events[currentEventId].tickets,
    currentUserId: state.session.currentUser.id
  });
};


const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EventRegistrationForm
);
