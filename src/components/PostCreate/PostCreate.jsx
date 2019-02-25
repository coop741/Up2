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
            <div className="form-group col-9">
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

            <div className="form-group col-3">
              <label htmlFor="event_value">Event importance</label>
              <select className="form-control form-control-md">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-9">
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
            <div className="form-group col-3 align-right-bottom">
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
              <button className="btn btn-outline-success float-right" onClick={myWidget.open}>
                Upload Image
            </button>
              <img
                class="float-right"
                src={this.state.image ? this.state.image : "https://via.placeholder.com/200"}
                alt=""
              />
            </div>

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
