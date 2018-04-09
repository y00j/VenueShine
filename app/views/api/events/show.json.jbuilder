json.extract! @event, :id, :title, :address, :description, :tickets_available, :start_date, :end_date, :organizer_id
json.image asset_path(@event.image.url)