export const createBookmark = (eventId) => (
  $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/bookmark`
  })
);

export const deleteBookmark = (eventId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}/bookmark`
  })
);