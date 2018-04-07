export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: '/api/events'
  })  
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`
  })
);