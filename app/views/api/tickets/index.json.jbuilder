@tickets.each do |ticket|
  json.set! ticket.id do 
    json.extract! ticket, :name, :price, :description, :event_id
  end
end 