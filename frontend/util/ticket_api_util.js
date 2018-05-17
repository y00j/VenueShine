export const createTicket = (ticket) => (
  $.ajax({
    method: "POST",
    url: '/api/tickets',
    data: { ticket }
  })
);