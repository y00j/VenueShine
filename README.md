# README

[Live Demo](https://venueshine.herokuapp.com)

VenueShine is a full-stack web application clone of Evetbrite. It was created with Ruby on Rails backend, PostgreSQL database, and React/Redux frontend.

With VenueShine, users can register for events, and create their own events. They can also bookmark events that interest them, and view their registered/past events on their dashboard.

Before going into the features, here is are the design documents: 
[Production Wiki](https://github.com/yujiezhu718/VenueShine/wiki)

## Key Features 

### User Authentication

Users can log in by clicking the "SIGN IN" button on the navbar, which pops ups a modal created through React. This session form also features a toggle button to switch forms from Sign Up/Login In. The email address field will render only on the Sign Up page.

+ login modal

## Landing Page

The landing page features a slideshow carousel, and below that are the Event Index Items. The Index Items are populated using React Components, and clicking on each individual item will link to its show page. Each index item also has a clickable bookmark icon which will be filled in if the event is bookmarked. 

![VenueShine LandingPage]
(https://github.com/yujiezhu718/venueshine_images/blob/master/event_form.png?raw=true)

Bookmarked events will be saved and featured on the user's dashboard

## Event Show Page

The Event show page also allows the user to toggle the bookmarking of the event. This is also where the event creator can edit and delete their event:

![VenueShine EventShow]
(https://github.com/yujiezhu718/venueshine_images/blob/master/event_show.png?raw=true)

Users can also use this form to create their own events. The create form shares a container with the edit form.

![VenueShine EventForm]
(https://github.com/yujiezhu718/venueshine_images/blob/master/event_form.png?raw=true)

In addition, the user can press the ticket button which will open the ticket purchasing form modal. Registered events will show up on the user's dashboard.

![VenueShine RegistrationForm]
(https://github.com/yujiezhu718/venueshine_images/blob/master/ticket_registration_form.png?raw=true)

## User DashBoard

The user dashboard has Upcoming/Saved/Past tabs that are dynamcically rendered. 

![VenueShine UserDashboard]
(https://github.com/yujiezhu718/venueshine_images/blob/master/user_dashboard.png?raw=true)