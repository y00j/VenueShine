# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

user = User.create!({username: "michael", email: "michael@michael.com", password: "password"})

event1 = Event.create!({
  title: "the greatest event", 
  address: "best address", 
  image_url: "/Users/Yujie/Desktop/App Academy/projects/venue_shine/app/assets/images/alcohol-beverage-bottles.jpg",
  description: "best event ever",
  tickets_available: 100,
  start_date: Time.now,
  end_date: Time.now,
  organizer_id: user.id
})

event2 = Event.create({
  title: "2nd the greatest event", 
  address: "2nd best address", 
  image_url: "/Users/Yujie/Desktop/App Academy/projects/venue_shine/app/assets/images/alcohol-beverage-bottles.jpg",
  description: "best event ever",
  tickets_available: 100,
  start_date: Time.now,
  end_date: Time.now,
  organizer_id: user.id
})