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
            ({ _id, first, last, date, title, description, image, value, hashtags, comments }, i) => (
              <Post
                {...this.props}
                key={i}
                _id={_id}
                first={first}
                last={last}
                date={date}
                title={title}
                description={description}
                image={image}
                value={value}
                hashtags={hashtags}
                comments={comments}
                id={_id}
              />
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default PostContainer;
