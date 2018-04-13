import React from 'react';
// import TicketRegistrationItem from './ticket_registration_item';


class TicketRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    let ticketOrders = {};
    this.props.tickets.forEach(ticket => { ticketOrders[ticket.id] = 0; });
    this.state = ticketOrders;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateQuantity(id) {
    return(e) => {
      this.setState({ [id]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault(); 
    let dataPayload = {};
    for (let id of Object.keys(this.state)) {
      dataPayload[id] = { quantity: this.state[id] };  
    }
    this.props.createTicketOrders(dataPayload).then(this.props.closeModal);

  }


  render() {
    return <form className="ticket-form" onSubmit={this.handleSubmit}>
        <div className="ticket-form-header">
          <h1>SELECT TICKETS</h1>
        </div>
        <div className="ticket-form-body">
          {this.props.tickets.map(ticket => <div className="ticket-label" key={ticket.id}>
            <div className="ticket-info">
              <h1>{ticket.name}</h1>
              <p>${ticket.price}</p>
            </div>
              <input onChange={this.updateQuantity(ticket.id)} type="number" min="0" max={this.props.ticketsAvailable - this.state[ticket.id]} />
            </div>)}
        </div>
        <div className="ticket-form-footer">
          <input className="ticket-form-submit" type="submit" value="CHECKOUT" />
        </div>
      </form>;
  }
}

export default TicketRegistrationForm;
