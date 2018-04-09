@events.each do |event| 
  json.set! event.id do 
    json.extract! event, :id, :title, :address, :start_date
    json.image asset_path(event.image.url)
  end 
end   