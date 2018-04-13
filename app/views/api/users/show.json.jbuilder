json.partial! "api/users/user", user: @user
json.attending_events do
  @user.events.uniq.each do |e|
    json.set! e.id  do
      json.extract! e, :id, :title, :address, :description, :tickets_available, :start_date, :end_date, :organizer_id
      json.past_event e.start_date < DateTime.now
      json.image e.image.url
    end
  end
end
json.hosting_events @user.organized_events.uniq

