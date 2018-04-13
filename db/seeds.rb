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
Bookmark.destroy_all

addresses = [
  "82 Highland Ave. Jackson, NJ 08527",
  "9413 La Sierra St. Odenton, MD 21113",
  "258 Broad Rd. Canandaigua, NY 14424",
  "489 Willow St. Bangor, ME 04401",
  "8375 Cherry Hill Lane Helena, MT 59601",
  "316 Garfield Ave. Aberdeen, SD 57401",
  "64 South Smith St. Columbus, GA 31904",
  "8 Union Ave. Nazareth, PA 18064",
  "62 Spring Ave. Virginia Beach, VA 23451",
  "89 Tanglewood St. Brunswick, GA 31525",
  "705 S. Peg Shop Ave. Brookfield, WI 53045",
  "162 Acacia Dr. Ridgefield, CT 06877",
  "352 Oak Valley Drive Springfield Gardens, NY 11413",
  "257 Arlington St. Abingdon, MD 21009",
  "68 Silver Spear Court Clifton Park, NY 12065",
  "8437 Arlington St. Selden, NY 11784",
  "75 W. Temple Ave. Queensbury, NY 12804",
  "43 Linda Circle Jamestown, NY 14701",
  "7171 Rockcrest Court Yorktown, VA 23693"
]

pictures = [
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/roll_the_dice_craps__KiXDV.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pokemon_pokemon_go_m_6iQmu.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pillars_of_creation.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_929831.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_929824.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_872957.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_802940.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_787961.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_769525.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_735911.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_416676.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_355988.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_335690.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_325924.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_325153.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_301920.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_300886.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_296878.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pexels_photo_260024.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/musician_rockstar_ba_wSZpZ.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/firework_new_year_s__TkFwV.jpg",
  "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/concert_pic.jpg"
]

titles = [
  "Designers + Geeks: Dictionary Stories",
  "Gutter Swan Americana Happy Hour",
  "Bob Dylan Birthday Bash",
  "Nick's Party Extragavangza",
  "Mattie's Pyjama party",
  "Andy's Thotbook Meet and Greet",
  "Annie Hosts a Dog Event",
  "Rock Your Way To The Top: 80s Rock Climbing",
  "Follow the Follows",
  "Really Awesome Music Show with a Little bit of Lights",
  "This is a Serious Business Meetup",
  "How to Javascript",
  "How to React/Redux",
  "Meet Ned's Cats",
  "Seeding Data!",
  "Let's Make Creative Stuff",
  "The 2D Event For 3D People",
  "Become a Chess Grandmaster",
  "Pokemon Go Getters",
  "Arm Wrestling World Championships",
  "Thumb War International Invitational"
]

descriptions = [
  "Americana duo Gutter Swan emerged onto the San Francisco music scene in 2015, featuring the powerful, emotive vocals of Loryn Barbeau, and the disarming yet complex guitar of Steve Egelman. Steve and Loryn bonded over a love of music, whiskey and punctuality, and thus Gutter Swan was born.",
  "Folk Singer/Songwriter, Jessica Malone, and Americana storyteller, Nick Foster, have come together to form Wild Town. Jessica sings with the spirit of Mt. Shasta and Nick's voice has roots as deep as a Norther Oak. Locked in harmonies begging to be heard, their voices weave intricate stories about home, being on the road, getting lost in the desert and some old boots falling in love.",
  "Dillbilly (pronouns: they/them) is a genre-queer alt-country singer-songwriter based out of Oakland, CA. Raised in a trailer park in the rural midwest near the Ohio River, Dill grew up surrounded by cornfields and grain silos going jug fishing and playing classical piano. Born to a touring singer/guitarist father, Dill was introduced to the music world at a young age. At 18, they won a piano scholarship that sent them to Berklee College of Music. Feeling uprooted and homesick as a transplant in Boston, Dillbilly dropped out and went back to the Midwest to start a band with their high school friends. Over the past 20 years, they have been performing and touring across the U.S. and Canada releasing 9 full length albums as well as contributions to soundtracks for movies and TV under their birth name, Denise Dill. Most of those releases were self recorded and released. Since moving to the Bay Area in 2015, they renamed their musical self and chose a name that more accurately embodies where they come from, where they draw inspiration, who they collaborate with, and how they identify as a genderqueer person. Now, in the 2018, they are performing as a band and have teamed up with renowned musician and producer Julie Wolf to create their 10th full length record which will be released next year.",
  "Sometimes the seas of life are choppy. Luckily, it's always blue skies and smooth seas at Yacht Rock Thursdays. From 5-6pm EVERY THURSDAY we WILL play nothing but the smoothest Yacht Rock radio in the bar. And remember, when your friend is drowning in a sea of sadness you don't just throw them a life preserver. You swim one over to them. Let's set sail...",
  "Max Chanowitz is bringing classy back. An experienced jazz pianist out of Oakland, Max has tickled the ivories for over 15 years. He began with classical training but was seduced by the improvisatory freedom of jazz after taking lessons at the Berkeley Jazzschool. Aside from leading local jazz/funk trio The Jazztronauts, Max plays with various jazz groups around the Bay as well as performing solo. Pairs well with evening gowns and the sound of clinking cocktails.",
  "Dance at San Francisco's premier dance-club featuring the best open-format DJs from all over. NO COVER with RSVP for you and all your friends or reserve a VIP section. VIP Table service text: 415.766.8114 Experience the all new Love + Propaganda San Francisco. Situated in San Francisco's Union Square district, Love and Propaganda is a crossroads where music, fashion, and art all meet to form an audio-visual experience unlike anything you've ever seen before. After you've settled into the gorgeous neo-classic inspired design, sound becomes the focal point. Expect to have your understanding of nightlife challenged, as L+P prides itself on the attention put forth to recognize the much broader community of widely acclaimed international and underground producers, DJs, and overall talent that you won’t find anywhere else.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Comedy Baseball is a competitve joke telling show where two teams of comedians compete on a digital baseball field. Featuring retro graphics, our custom baseball game is a throwback to old nintendo baseball games with twist- its controlled by telling jokes. Over the course of the season the teams will duke it out for the title of Comedy Baseball Champions!",
  "Tinder Disrupt is a live show that invites comedians, improvisers and sketch artists from the Bay Area to give brief entertaining PowerPoint presentations about their favorite, single friend in front of a crowd of slightly inebriated singles. Hosted by the ever-incisive Rose Oser. Brought to you by FaultLine Theater and PianoFight.",
  "Think you know everything about the tech world? Come join us for a night of ultimate data driven tech trivia and bring your A-Game! Our questions will be focused on the technical aspect of software engineering, coding, and more.",
  "Calling all solopreneurs, small biz owners, independent professionals, freelancers & contractors. Our community networking and support group is growing and our aim is to help YOU with business building as well! Come join us for our monthly gathering. Attendance is free, however seating is limited for the sit-down meetings, so please register in advance. Please arrive on time and bring business cards or marketing materials to share. Also, bring your business frustrations or concerns and together we will Brainstorm! The Golden Gate Valley Library is close to MUNI, has metered street parking and parking garages within two blocks. We look forward to welcoming you and helping generate business success! For questions, call Melissa Morgan Tang at 415-244-0742.",
  "When you give a designer a dictionary, beautiful things happen. We are thrilled to welcome Jez Burrows to the Designers + Geeks stage for a special event celebrating his latest work, Dictionary Stories."
]

ticket_availables = [10, 20, 30, 40, 50, 99, 1000, 12]


user1 = User.create!({username: "michael", email: "michael@gmail.com", password: "password", image: "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/demoUserProfileImg.jpg"})
user2 = User.create!({username: "DemoUser", email: "demouser@gmail.com", password: "password"})
user3 = User.create!({username: "Nima", email: "nima@gmail.com", password: "password"})
user4 = User.create!({username: "yujie", email: "yujie@gmail.com", password: "password"})
user5 = User.create!({username: "andy", email: "andy@gmail.com", password: "password"})
user6 = User.create!({username: "annie", email: "annie@gmail.com", password: "password"})
user7 = User.create!({username: "lexi", email: "lexi@gmail.com", password: "password"})
user8 = User.create!({username: "nick", email: "nick@mariokart.com", password: "ihatejavascript"})
user9 = User.create!({username: "mattie", email: "mattie@pyjamas.com", password: "password"})

year = [2017, 2018]
month = (3...12).to_a
day = (0..27).to_a

(1..27).each do |i| 
  Event.create!(
    title: titles.sample,
    image: pictures.sample,
    address: addresses.sample,
    description: descriptions.sample,
    tickets_available: ticket_availables.sample,
    start_date: Date.new(year.sample, month.sample, i),
    end_date: Date.new(2019, month.sample, i),
    organizer_id: User.all.sample.id
  )
end 

ticket_names = [
  "General Admission", 
  "VIP",
]

ticket_prices = [10.00, 20.00, 30.00, 40.00, 50.00, 60.00, 70.00, 100.00, 120.00]

Event.all.each do |event| 
  Ticket.create({
    name: ticket_names.sample,
    price: ticket_prices.sample,
    event_id: event.id
  })
end 


Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})
Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})
Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})
Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})
Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})
Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})
Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

Bookmark.create({
  user_id: User.all.sample.id,
  event_id: Event.all.sample.id
})

User.all.each do |user|
  TicketOrder.create({
    user_id: user.id,
    ticket_id: Ticket.all.sample.id,
    quantity: (1...10).to_a.sample
  })
end 

(0..10).each do |i|
  TicketOrder.create({
    user_id: user1.id,
    ticket_id: Ticket.all.sample.id,
    quantity: 1
  })
end 
