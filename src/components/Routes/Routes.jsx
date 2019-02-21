import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostContainer from "../PostContainer/PostContainer";
import PostCreate from "../PostCreate/PostCreate";
class Routes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/create" exact component={PostCreate} />
        <Route path="/" exact component={PostContainer} />
      </Switch>
    );
  }
}

export default Routes;
