import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';



class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.event.title || null,
      address: this.props.event.address || null,
      description: this.props.event.description || null,
      imageFile: this.props.event.imageFile || null,
      imageUrl: this.props.event.imageUrl || null,
      tickets_available: this.props.event.tickets_available || null,
      start_date: this.props.event.start_date || null,
      end_date: this.props.event.end_date || null,
      organizer_id: this.props.event.organizer_id || null 
    };
    // debugger;
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    formData.append("event[organizer_id]", this.state.organizerId);

    if (this.state.imageFile) formData.append("event[image]", this.state.imageFile);
    this.props.handleEvent(formData, this.props.event.id).then(() => this.props.history.push('/'));
  }

  render() {

    return <div className="form-fields">
        <input type="text" onChange={this.update("title")} placeholder={this.state.title || "title"} />
        <input type="text" onChange={this.update("address")} placeholder={this.state.address || "address"} />
        <textarea onChange={this.update("description")} placeholder={this.state.description || "description"} ></textarea>
        <input type="number" onChange={this.update("ticketsAvailable")} placeholder={this.state.ticketsAvailable || "tickets available"} />
        <input type="date" onChange={this.update("startDate")} placeholder="start_date" />
        <input type="date" onChange={this.update("endDate")} placeholder="end_date" />
        <input type="number" onChange={this.update("organizerId")} placeholder="organizer_id" />
        <input type="file" onChange={this.updateFile} placeholder="file" />
        <button onClick={this.handleSubmit}>Create Event</button>
        <img src={this.state.imageUrl} />
      </div>;
  }
}

export default withRouter(EventForm);