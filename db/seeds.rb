# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all
Ticket.destroy_all 
TicketOrder.destroy_all


pictures = []
titles = []
descriptions = [
  "Americana duo Gutter Swan emerged onto the San Francisco music scene in 2015, featuring the powerful, emotive vocals of Loryn Barbeau, and the disarming yet complex guitar of Steve Egelman. Steve and Loryn bonded over a love of music, whiskey and punctuality, and thus Gutter Swan was born.",
  "Folk Singer/Songwriter, Jessica Malone, and Americana storyteller, Nick Foster, have come together to form Wild Town. Jessica sings with the spirit of Mt. Shasta and Nick's voice has roots as deep as a Norther Oak. Locked in harmonies begging to be heard, their voices weave intricate stories about home, being on the road, getting lost in the desert and some old boots falling in love.",
  "Dillbilly (pronouns: they/them) is a genre-queer alt-country singer-songwriter based out of Oakland, CA. Raised in a trailer park in the rural midwest near the Ohio River, Dill grew up surrounded by cornfields and grain silos going jug fishing and playing classical piano. Born to a touring singer/guitarist father, Dill was introduced to the music world at a young age. At 18, they won a piano scholarship that sent them to Berklee College of Music. Feeling uprooted and homesick as a transplant in Boston, Dillbilly dropped out and went back to the Midwest to start a band with their high school friends. Over the past 20 years, they have been performing and touring across the U.S. and Canada releasing 9 full length albums as well as contributions to soundtracks for movies and TV under their birth name, Denise Dill. Most of those releases were self recorded and released. Since moving to the Bay Area in 2015, they renamed their musical self and chose a name that more accurately embodies where they come from, where they draw inspiration, who they collaborate with, and how they identify as a genderqueer person. Now, in the 2018, they are performing as a band and have teamed up with renowned musician and producer Julie Wolf to create their 10th full length record which will be released next year.",
  "Sometimes the seas of life are choppy. Luckily, it's always blue skies and smooth seas at Yacht Rock Thursdays. From 5-6pm EVERY THURSDAY we WILL play nothing but the smoothest Yacht Rock radio in the bar. And remember, when your friend is drowning in a sea of sadness you don't just throw them a life preserver. You swim one over to them. Let's set sail...",
  "Max Chanowitz is bringing classy back. An experienced jazz pianist out of Oakland, Max has tickled the ivories for over 15 years. He began with classical training but was seduced by the improvisatory freedom of jazz after taking lessons at the Berkeley Jazzschool. Aside from leading local jazz/funk trio The Jazztronauts, Max plays with various jazz groups around the Bay as well as performing solo. Pairs well with evening gowns and the sound of clinking cocktails.",
  "Dance at San Francisco's premier dance-club featuring the best open-format DJs from all over. NO COVER with RSVP for you and all your friends or reserve a VIP section. VIP Table service text: 415.766.8114 Experience the all new Love + Propaganda San Francisco. Situated in San Francisco's Union Square district, Love and Propaganda is a crossroads where music, fashion, and art all meet to form an audio-visual experience unlike anything you've ever seen before. After you've settled into the gorgeous neo-classic inspired design, sound becomes the focal point. Expect to have your understanding of nightlife challenged, as L+P prides itself on the attention put forth to recognize the much broader community of widely acclaimed international and underground producers, DJs, and overall talent that you won’t find anywhere else."
]

tickets_available = [10, 20, 30, 40, 50, 99]
organizer_ids

user1 = User.create!({username: "michael", email: "michael@gmail.com", password: "password"})
user2 = User.create!({username: "DemoUser", email: "demouser@gmail.com", password: "password"})
user3 = User.create!({username: "Nima", email: "nima@gmail.com", password: "password"})
user4 = User.create!({username: "yujie", email: "yujie@gmail.com", password: "password"})
user5 = User.create!({username: "andy", email: "andy@gmail.com", password: "password"})
user6 = User.create!({username: "annie", email: "annie@gmail.com", password: "password"})
user7 = User.create!({username: "lexi", email: "lexi@gmail.com", password: "password"})


event1 = Event.create!(
  {
    title: "Gutter Swan Americana Happy Hour", 
    address: "PianoFight, Bar Stage, 144 Taylor St, San Francisco, CA 94102" 
    description: ","
    tickets_available: 100,
    start_date: DateTime.now,
    end_date: DateTime.now,
    organizer_id: User.all.sample.id
  }
)

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

ticket1 = Ticket.create({
  name: "general admission",
  price: 99.99,
  event_id: event1.id,
  ticket_quantity: 20
})

ticket_order1 = TicketOrder.create({
  user_id: user.id,
  ticket_id: ticket1.id,
  quantity: 10,
})