import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';



class EventForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.event.id);
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
    this.props.fetchEvent(this.props.event.id);
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
    return (
      <div className="form-fields">
        <label>
          <input type="text" value={this.state.title} onChange={this.update("title")} placeholder={"title"} />
        </label>
          <input type="text" onChange={this.update("address")} value={this.state.address} placeholder={"address"} />
          <textarea onChange={this.update("description")} value={this.state.description} placeholder={"description"} />
          <input type="number" onChange={this.update("ticketsAvailable")} value={this.state.ticketsAvailable} placeholder={"tickets available"} />
          <input type="date" onChange={this.update("startDate")} value={this.state.startDate} />
          <input type="date" onChange={this.update("endDate")} value={this.state.endDate} />
          <input type="file" onChange={this.updateFile}  />
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
          <img src={this.state.imageUrl} />
      </div>
    );
  }
}

export default withRouter(EventForm);