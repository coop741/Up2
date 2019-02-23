import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Timeline from "../Timeline";
import PostCreate from "../PostCreate";
import Login from "../Login";
import UserCreate from "../UserCreate";
class Routes extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.reloadPosts();
  }

  reloadPosts = () => {
    axios
      .get(process.env.REACT_APP_API + "/api/events")
      .then(({ data: posts }) => {
        console.log("posts", posts);
        this.setState({ posts });
      });
  };

  handleCreatePost = e => {
    // Preventing page reload
    e.preventDefault();

    // Getting Form Elements
    // ------------------
    const {
      first_name,
      last_name,
      event_title,
      event_value,
      event_image,
      event_description
    } = e.target;

    // Form data object
    // ----------------------
    const post = {
      first: first_name.value,
      last: last_name.value,
      title: event_title.value,
      value: Number(event_value.value),
      image: event_image.value,
      description: event_description.value
    };

    console.log(post);

    // error checking can be done here
    if (first_name.value) {
      axios
        .post("http://localhost:5000/api/events", post)
        .then(res => {
          console.log("sent to server");
          this.reloadPosts();
        })
        .catch(err => console.log(err));
    } else {
      console.log("input field required");
    }

    // Copy old posts and add new post to it.
    // ------------------------
    // const posts = [...this.state.posts];
    // posts.push(post);
    // this.setState({ posts });
  };

  render() {
    return (
      <Switch>
        <Route path="/createUser" exact component={UserCreate} />
        <Route path="/login" exact component={Login} />
        <Route
          path="/create"
          exact
          component={props => (
            <PostCreate
              posts={this.state.posts}
              handleCreate={this.handleCreatePost}
              {...props}
            />
          )}
        />
        <Route
          path="/"
          exact
          component={props => <Timeline posts={this.state.posts} {...props} />}
        />
      </Switch>
    );
  }
}

export default Routes;
