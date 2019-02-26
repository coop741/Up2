import React, { Component } from "react";
import Post from "../Post/Post";
import "./PostContainer.css";

class PostContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {/* ---Render Events--- */}
          {this.props.posts.map(
            ({ first, last, date, title, description, image, value, hashtags, comments }, i) => (
              <Post
                {...this.props}
                key={i}
                first={first}
                last={last}
                date={date}
                title={title}
                description={description}
                image={image}
                value={value}
                hashtags={hashtags}
                comments={comments}
              />
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default PostContainer;
