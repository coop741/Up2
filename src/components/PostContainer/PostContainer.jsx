import React, { Component } from "react";
import Post from "../Post/Post";
import "./PostContainer.css";

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">

        {/* ---Render Events--- */}
        <Post
          first="Avonlea"
          last="Haymart"
          date="Todayish"
          title="I got a new dog"
          desc="He's chonky"
          image="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"
          value="10"
          hashtags={["dog","the goodest boy"]}
        />
      </div>
    );
  }
}

export default PostContainer;
