import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return(
      <div className="ticket-form">
        <form>
          <label>
            Ticket Name
            <input type="text" onChange={this.props.updateTicket("name")}/>
          </label>
          <label>
            Ticket Price
            <input type="number" onChange={this.props.updateTicket("price")}/>
          </label>
          <label>
            Ticket Description
            <input type="text" onChange={this.props.updateTicket("description")}/>
          </label>
          
        </form>
      </div>
    );
  }
}

export default withRouter(TicketForm);