
export const createTicketOrders = (ticketOrders) => (
  $.ajax({
    method: 'POST',
    url: '/api/ticket_orders',
    data: { ticket_orders: ticketOrders }
  })
);