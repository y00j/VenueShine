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

export const createEvent = (event) => (
  $.ajax({
    url: 'api/events',
    method: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: event 
  })
);