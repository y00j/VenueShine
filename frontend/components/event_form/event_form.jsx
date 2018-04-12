import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';

class EventForm extends React.Component {
  constructor(props) {
    // debugger;
    super(props);
    this.state = {
      title: this.props.event.title || "",
      address: this.props.event.address || "",
      description: this.props.event.description || "",
      imageFile: this.props.event.imageFile || "",
      imageUrl: this.props.event.image || "",
      ticketsAvailable: this.props.event.ticketsAvailable,
      startDate: this.props.event.startDate || null,
      endDate: this.props.event.endDate || null,
      organizerId: this.props.organizerId
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        title: newProps.event.title,
        address: newProps.event.address,
        description: newProps.event.description,
        imageFile: newProps.event.imageFile,
        imageUrl: newProps.event.image,
        ticketsAvailable: newProps.event.ticketsAvailable,
        startDate: newProps.event.startDate,
        endDate: newProps.event.endDate,
        organizerId: newProps.organizerId
      });
    }
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    };

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    var formData  = new FormData(); 
    formData.append("event[title]", this.state.title);
    formData.append("event[address]", this.state.address);
    formData.append("event[description]", this.state.description);
    formData.append("event[tickets_available]", this.state.ticketsAvailable);
    formData.append("event[start_date]", this.state.startDate);
    formData.append("event[end_date]", this.state.endDate);

    let eventUrl = this.props.event.id ? `events/${this.props.event.id}` : "";

    if (this.state.imageFile) formData.append("event[image]", this.state.imageFile);
    this.props.handleEvent(formData, this.props.event.id).then(() => this.props.history.push(`/${eventUrl}`));
  }

  render() {
    // debugger;
    console.warn(this.props.event);
    if (!this.props.event) {
      return <div>loading</div>;
    }
    return <div className="form-fields">
        <div className="column-wrapper">
          <div className="event-form">
            <div className="event-title-field">
              <h1>Event Title</h1>
              <input type="text" value={this.state.title} onChange={this.update("title")} placeholder={"title"} />
            </div>

            <div className="event-name-field">
              <h1>Address</h1>
              <input type="text" onChange={this.update("address")} value={this.state.address} placeholder={"address"} />
            </div>

            <div className="event-description-field">
              <h1>Description</h1>
              <textarea onChange={this.update("description")} value={this.state.description} placeholder={"description"} />
            </div>

            <div className="event-ticketsAvailable-field">
              <h1>Tickets Available</h1>
              <input type="number" onChange={this.update("ticketsAvailable")} value={this.state.ticketsAvailable} placeholder={"tickets available"} />
            </div>

            <div className="event-Begin-field">
              <h1>Start Date</h1>
              <input type="date" onChange={this.update("startDate")} value={this.state.startDate} />
            </div>

            <div className="event-End-field">
              <h1>End Date</h1>
              <input type="date" onChange={this.update("endDate")} value={this.state.endDate} />
            </div>

            <div className="image-wrapper">
              <img className="preview-image" src={this.state.imageUrl} />
            </div>

            <div className="event-file-field">
              <h1>Image Upload</h1>
              <input type="file" onChange={this.updateFile} />
            </div>

            <button className="event-form-button" onClick={this.handleSubmit}>
              {this.props.formType}
            </button>
          </div>
        </div>
      </div>;
  }
}

export default withRouter(EventForm);
