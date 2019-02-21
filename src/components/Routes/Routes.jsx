import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostContainer from "../PostContainer/PostContainer";
import PostCreate from "../PostCreate/PostCreate";
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
        hashtags: "dog"
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
        hashtags: "car"
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
        hashtags: "car"
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
        hashtags: "car"
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
        hashtags: "car"
      }
    ]
  };
  render() {
    return (
      <Switch>
        <Route path="/create" exact component={PostCreate} />
        <Route
          path="/"
          exact
          component={props => (
            <PostContainer posts={this.state.posts} {...props} />
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
