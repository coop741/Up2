import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Timeline from "../Timeline"
import PostCreate from "../PostCreate";
class Routes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/create" exact component={PostCreate} />
        <Route path="/" exact component={Timeline} />
      </Switch>
    );
  }
}

export default Routes;
