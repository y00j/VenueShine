import React from 'react';
// import TicketRegistrationItem from './ticket_registration_item';


class TicketRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      ticket_id: "",
      quantity: 0
    };
  }


  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }


  render() {
    return <form>
        <h1>Select Tickets</h1>
        {this.props.tickets.map(ticket => <label>
            {" "}
            {ticket.name}
            <p> Tickets Remaining: {this.props.ticketsAvailable - this.state.quantity}</p>
            <input onChange={this.update('quantity')} type="number" min="0" max={this.props.ticketsAvailable} />
          </label>)}
        <input type="submit" value="CHECKOUT" />
      </form>;
  }
}

export default TicketRegistrationForm;
