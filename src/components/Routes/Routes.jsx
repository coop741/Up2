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
    axios
      .get(process.env.REACT_APP_API + "/api/events")
      .then(({ data: posts }) => {
        this.setState({ posts });
      });
  }

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
      event_image
    } = e.target;

    // Form data object
    // ----------------------
    const post = {
      first: first_name.value,
      last: last_name.value,
      title: event_title.value,
      value: Number(event_value.value),
      image: event_image.value
    };

    console.log(post);

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
