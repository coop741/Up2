import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Timeline from "../Timeline";
import PostCreate from "../PostCreate";
import Login from "../Login";
import UserCreate from "../UserCreate";
class Routes extends Component {
  state = {
    posts: [
      {
        first: "Avonlea",
        last: "Haymart",
        date: "Todayish",
        title: "I got a new dog",
        desc: "He's chonky",
        image:
          "https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg",
        value: "10",
        hashtags: ["dog", "nice"]
      },
      {
        first: "Muhammad",
        last: "Al Juburi",
        date: "12/12/2012",
        title: "I got a new car",
        desc: "The car is super fast",
        image:
          "https://g.foolcdn.com/editorial/images/492310/orange-fury-mustang-gt-coupe-with-performance-3.jpg",
        value: "10",
        hashtags: ["dog", "nice"]
      },
      {
        first: "Muhammad",
        last: "Al Juburi",
        date: "12/12/2012",
        title: "I got a new car",
        desc: "The car is super fast",
        image:
          "https://g.foolcdn.com/editorial/images/492310/orange-fury-mustang-gt-coupe-with-performance-3.jpg",
        value: "10",
        hashtags: ["dog", "nice"]
      },
      {
        first: "Muhammad",
        last: "Al Juburi",
        date: "12/12/2012",
        title: "I got a new car",
        desc:
          "The car lorem  kjhkjghhjkgjhg j jhf hjf hj fhjf hjf hdhkd  k hfghk dkhdg khdhk dhkd hk d hkd h l gfh gf is super fast",
        image:
          "https://g.foolcdn.com/editorial/images/492310/orange-fury-mustang-gt-coupe-with-performance-3.jpg",
        value: "10",
        hashtags: ["dog", "nice"]
      },
      {
        first: "Muhammad",
        last: "Al Juburi",
        date: "12/12/2012",
        title: "I got a new car",
        desc: "The car is super fast",
        image:
          "https://g.foolcdn.com/editorial/images/492310/orange-fury-mustang-gt-coupe-with-performance-3.jpg",
        value: "10",
        hashtags: ["dog", "nice"]
      }
    ]
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
      event_image
    } = e.target;

    // Form data object
    // ----------------------
    const post = {
      first: first_name.value,
      last: last_name.value,
      title: event_title.value,
      value: Number(event_value.value),
      image: event_image.value,
      date: new Date().toDateString()
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
