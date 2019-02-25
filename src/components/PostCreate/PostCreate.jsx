import React, { Component } from "react";
import "./PostCreate.css";

class PostCreate extends Component {
  state = {
    image: ""
  };

  render() {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUD_PRESET
      },
      (error, result) => {
        console.log(error, result);
        if (result.event === "success") {
          this.setState(
            {
              image: result.info.secure_url
            },
            console.log("Set image url to: ", result.info.secure_url)
          );
        }
      }
    );
    return (
      <div className="post-create">
        <h2>Create an event</h2>
        <hr />

        {/*
          ===================
          Create Event Form
          ===================
          */}
        <form onSubmit={this.props.handleCreate}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  className="form-control"
                  required
                  placeholder="Enter first name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  className="form-control"
                  required
                  placeholder="Enter last name"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="event_title">Event title</label>
            <input
              id="event_title"
              name="event_title"
              type="text"
              className="form-control"
              required
              placeholder="Enter a title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="event_value">Event value</label>
            <select multiple className="form-control" name="event_value" id="event_value" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form-group">
            {/* <label htmlFor="event_image">Upload an image</label> */}
            <input
              id="event_image"
              type="text"
              name="event_image"
              className="form-control-file"
              required
              hidden
              value={this.state.image}
            />
            <button className="btn btn-outline-success" onClick={myWidget.open}>
              Upload Image
            </button>
            <img
              style={{ display: "block", height: "200px", margin: "15px 0" }}
              src={this.state.image ? this.state.image : "https://via.placeholder.com/200"}
              alt=""
            />
          </div>

          <div className="form-group">
            <label htmlFor="event_description">Description</label>
            <textarea
              name="event_description"
              id="event_description"
              className="form-control"
              cols="30"
              rows="10"
              required
              placeholder="Describe the event"
            />
          </div>

          <button type="submit" className="btn btn-outline-success">
            Create Event
          </button>
        </form>
      </div>
    );
  }
}

export default PostCreate;
