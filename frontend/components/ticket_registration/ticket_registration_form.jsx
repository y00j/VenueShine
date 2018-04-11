import React from 'react';
// import TicketRegistrationItem from './ticket_registration_item';


class TicketRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    let ticketOrders = {};
    this.props.tickets.forEach(ticket => { ticketOrders[ticket.id] = 0; });
    this.state = ticketOrders;
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.state);
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
    console.log(dataPayload);
    this.props.createTicketOrders(dataPayload).then(this.props.closeModal);

    // console.log(this.state);
    
    // submittingOrders(0, numOrders).forEach(order => this.props.orderTicket(order));
    // const lastOrder = submittingOrders[numOrders];
  }


  render() {
    return <form onSubmit={this.handleSubmit}>
        <h1>Select Tickets</h1>
        {this.props.tickets.map(ticket => <label key={ticket.id}>
            {ticket.name}
            <input onChange={this.updateQuantity(ticket.id)} type="number" min="0" max={this.props.ticketsAvailable - this.state[ticket.id]} />
            <p>
              Tickets Remaining:
              {this.props.ticketsAvailable - this.state[ticket.id]}
            </p>
          </label>)}
        <input type="submit" value="CHECKOUT" />
      </form>;
  }
}

export default TicketRegistrationForm;
