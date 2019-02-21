import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Timeline from "../Timeline"
import PostCreate from "../PostCreate";
import Login from "../Login";
import UserCreate from "../UserCreate";
class Routes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/create" exact component={PostCreate} />
        <Route path="/" exact component={Timeline} />
        <Route path="/login" exact component={Login} />
        <Route path="/createUser" exact component={UserCreate} />
      </Switch>
    );
  }
}

export default Routes;
