import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // 0 for not logged in, 2 for loggin in, 1 for logged in
      login: sessionStorage.getItem('user') != null,
      username: null,
      login_text: ``,
    }
    // this.changeText = this.changeText.bind(this);
    //set the text
  }

  logout() {
    sessionStorage.removeItem('user')
    console.log("User logged out")
    window.location.reload()
  }

  onMouseover(e) {
    this.setState({ login_text: 'Logout' })
  }
  //clear the text
  onMouseout(e) {
    this.setState({ login_text: `Welcome ${this.state.username}!` })
  }

  // Login_text is set with a username variable because I couldn't make login_text directly use another state object. :(

  componentWillMount() {
    console.log(this.state.login)
    if (sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem('user')).username
      this.setState({ login: 1, username: user, login_text: `Welcome ${user}!`})
    }
  }



  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between mb-4">
        <div className="container">
          <Link to="/">
            <img src="./images/logo.png" alt="Logo" />
          </Link>

          <div className="float-right">
            <Link className="btn btn-outline-success float-right ml-3" to="create">
              Create Event
          </Link>
            {!this.state.login &&
              <Link className="btn btn-outline-success float-right ml-3" to="login">
                Log In
        </Link>}
            {this.state.login &&
              <button className="btn btn-outline-success float-right ml-3" onMouseOver={this.onMouseover.bind(this)}
                onMouseLeave={this.onMouseout.bind(this)} onClick={this.logout}>
                {this.state.login_text}
              </button>
            }

          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
