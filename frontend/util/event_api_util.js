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

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  })
);

export const createEvent = (event) => {
  return $.ajax({
    url: 'api/events',
    method: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: event 
  });
};

export const updateEvent = (event, id) => {
  // debugger;
  return(
    $.ajax({
      url: `/api/events/${id}`,
      method: "PATCH",
      processData: false,
      contentType: false,
      dataType: 'json',
      data: event
    })
  );
};