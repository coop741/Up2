import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between mb-4">
        <div className="container">
          <Link to="/">
            <img src="./images/logo.png" alt="Logo" />
          </Link>

          <Link className="btn btn-outline-success float-right" to="create">
                    Create event
                </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
