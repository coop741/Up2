import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <div className="container">
                    <img src="./images/logo.png" alt="Logo"></img>

                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavBar;