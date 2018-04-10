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
  address: "some address", 
  description: "best event ever",
  tickets_available: 100,
  start_date: Time.now,
  end_date: Time.now,
  organizer_id: user.id
})

event2 = Event.create({
  title: "2nd the greatest event", 
  address: "2nd some address", 
  description: "best event ever",
  tickets_available: 100,
  start_date: Time.now,
  end_date: Time.now,
  organizer_id: user.id
})

event3 = Event.create!({
  title: "3rd greatest event", 
  address: "some address", 
  description: "best event ever",
  tickets_available: 100,
  start_date: Time.now,
  end_date: Time.now,
  organizer_id: user.id
})

event4 = Event.create({
  title: "4th greatest event", 
  address: "2nd some address", 
  description: "best event ever",
  tickets_available: 100,
  start_date: Time.now,
  end_date: Time.now,
  organizer_id: user.id
})

event5 = Event.create({
  title: "Gutter Swan Americana Happy Hour",
  address: "PianoFight  Bar Stage  144 Taylor St  San Francisco, CA 94102", 
  description: "Americana duo Gutter Swan emerged onto the San Francisco music scene in 2015, featuring the powerful, emotive vocals of Loryn Barbeau, and the disarming yet complex guitar of Steve Egelman. Steve and Loryn bonded over a love of music, whiskey and punctuality, and thus Gutter Swan was born.",
  tickets_available: 10,
  start_date: "2018-04-19",
  end_date: "2018-04-26",
  image: "http://s3.us-west-1.amazonaws.com/venueshine-dev/events/images/000/000/021/original/eventbrite__show_img.jpg?1523377252",
  organizer_id: 5,
})