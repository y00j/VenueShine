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
      <div>
        ticket form 
      </div>
    );
  }
}

export default withRouter(TicketForm);