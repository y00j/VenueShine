import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import TicketForm from '../ticket_form/ticket_form';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    event:{
                            title: this.props.event.title || "",
                            address: this.props.event.address || "",
                            description: this.props.event.description || "",
                            imageFile: this.props.event.imageFile || "",
                            imageUrl: this.props.event.image || "",
                            ticketsAvailable: this.props.event.ticketsAvailable || 0,
                            startDate: this.props.event.startDate,
                            endDate: this.props.event.endDate,
                            organizerId: this.props.organizerId
                          },
                    ticket: this.props.ticket
                  };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTicket = this.updateTicket.bind(this);
  }

  componentDidMount() {
    if (isEmpty(this.props.event) && this.props.formType === "Edit Event") {
      this.props.fetchEvent(this.props.match.params.eventId);
    } else {
      return null;
    }
  }

  componentWillReceiveProps(newProps) {
    if (isEmpty(this.props.event) && newProps.event && this.props.formType === "Edit Event") {
      this.setState({ 
        event:{
                title: newProps.event.title,
                address: newProps.event.address,
                description: newProps.event.description,
                imageFile: newProps.event.imageFile,
                imageUrl: newProps.event.image,
                ticketsAvailable: newProps.event.ticketsAvailable,
                startDate: newProps.event.startDate,
                endDate: newProps.event.endDate,
                organizerId: newProps.organizerId
              },
        ticket: this.props.ticket
      });
    }
  }

  updateEvent(field) {
    return(e) => {
      let event = this.state.event;
      event[field] = e.target.value;
      this.setState({ event });
    };
  }

  updateTicket(field) {
    return(e) => {
      let ticket = this.state.ticket;
      ticket[field] = e.target.value;
      this.setState({ ticket });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      let event = this.state.event;
      event.imageFile = file;
      event.imageUrl = fileReader.result;
      this.setState({ event });
    };

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    var formData  = new FormData(); 
    console.log(this.state);
    formData.append("event[title]", this.state.event.title);
    formData.append("event[address]", this.state.event.address);
    formData.append("event[description]", this.state.event.description);
    formData.append("event[tickets_available]", this.state.event.ticketsAvailable);
    formData.append("event[start_date]", this.state.event.startDate);
    formData.append("event[end_date]", this.state.event.endDate);
    formData.append("event[organizer_id]", this.state.event.organizerId);

    let eventUrl = this.props.event.id ? `events/${this.props.event.id}` : "";

    if (this.state.event.imageFile) formData.append("event[image]", this.state.event.imageFile);
    
    this.props.handleEvent(formData, this.props.event.id)
      .then((event) => {
        let ticket = this.state.ticket;
        ticket["event_id"] = event.event.id; //because event is wrapped in the receiveEvent action
        return this.props.createTicket(ticket); 
      })
      .then(() => this.props.history.push(`/${eventUrl}`));
    //must add .then(createTicket(ticket))
  }

  renderTicketForm() {
    if (this.props.createTicket) {
      return < TicketForm  updateTicket={this.updateTicket}/>;
    } else {
      return null;
    }
  }

  render() {
    console.log(this.state);

    if (!this.props.event) {
      return <div>loading</div>;
    }
    return <div className="form-fields">
        <div className="column-wrapper">
          <div className="event-form">
            <div className="event-title-field">
              <h1>Event Title</h1>
              <input type="text" value={this.state.event.title} onChange={this.updateEvent("title")} placeholder={"title"} />
            </div>

            <div className="event-name-field">
              <h1>Address</h1>
              <input type="text" onChange={this.updateEvent("address")} value={this.state.event.address} placeholder={"address"} />
            </div>

            <div className="event-description-field">
              <h1>Description</h1>
              <textarea onChange={this.updateEvent("description")} value={this.state.event.description} placeholder={"description"} />
            </div>

            <div className="event-ticketsAvailable-field">
              <h1>Tickets Available</h1>
              <input type="number" onChange={this.updateEvent("ticketsAvailable")} value={this.state.event.ticketsAvailable} placeholder={"tickets available"} />
            </div>

            <div className="event-Begin-field">
              <h1>Start Date</h1>
              <input type="date" onChange={this.updateEvent("startDate")} value={this.state.event.startDate} />
            </div>

            <div className="event-End-field">
              <h1>End Date</h1>
              <input type="date" onChange={this.updateEvent("endDate")} value={this.state.event.endDate} />
            </div>

            <div className="image-wrapper">
              <img className="preview-image" src={this.state.event.imageUrl} />
            </div>

            <div className="event-file-field">
              <h1>Image Upload</h1>
              <input type="file" onChange={this.updateFile} />
            </div>
            
            {this.renderTicketForm()}

            <button className="event-form-button" onClick={this.handleSubmit}>
              {this.props.formType}
            </button>
          </div>
        </div>


        
      </div>;
  }
}

export default withRouter(EventForm);
