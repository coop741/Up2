import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import "./PostContainer.css";

class PostContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Link className="btn btn-primary float-right" to="create">
          Create event
        </Link>
        <div className="clearfix" />
        <h2>Events</h2>
        <hr />
        <div className="row">
          {/* ---Render Events--- */}
          {this.props.posts.map(
            ({ first, last, date, title, desc, image, value, hashtags }) => (
              <Post
                first={first}
                last={last}
                date={date}
                title={title}
                desc={desc}
                image={image}
                value={value}
                hashtags={hashtags}
              />
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default PostContainer;
