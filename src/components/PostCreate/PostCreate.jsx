import React, { Component } from "react";
import "./PostCreate.css";

class PostCreate extends Component {
  render() {
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
              placeholder="Enter a title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="event_value">Event value</label>
            <select
              multiple
              className="form-control"
              name="event_value"
              id="event_value"
            >
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
            <label htmlFor="event_image">Upload an image</label>
            <input
              type="file"
              name="event_image"
              className="form-control-file"
              id="event_image"
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
