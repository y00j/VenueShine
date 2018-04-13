json.extract! @event, :id, :title, :address, :description, :tickets_available, :start_date, :end_date
json.image asset_path(@event.image.url)
json.tickets @event.tickets
json.organizer User.find(@event.organizer_id).username
