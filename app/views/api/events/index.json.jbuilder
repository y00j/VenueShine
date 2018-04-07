@events.each do |event| 
  json.set! event.id do 
    json.extract! event, :id, :title, :address, :image_url, :description, :start_date
  end 
end   