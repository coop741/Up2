import React, { Component } from "react";
import Post from "../Post/Post";
import "./PostContainer.css";

class PostContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="text-center">Events</h2>
        <hr />
        <div className="row">
          {/* ---Render Events--- */}
          {this.props.posts.map(
            ({ first, last, date, title, desc, image, value, hashtags }, i) => (
              <Post
                {...this.props}
                key={i}
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
