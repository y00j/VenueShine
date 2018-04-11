import React from 'react';

const TicketRegistrationItem = ({ticket, ticketsAvailable}) => {
  return (
    <label> {ticket.name}
      <p>Tickets Remaining: {ticketsAvailable}</p>
      <input type="number" min="0" max={ticketsAvailable}/>
    </label>
  );
};

export default TicketRegistrationItem;