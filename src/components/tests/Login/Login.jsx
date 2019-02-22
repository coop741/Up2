import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
    handleSubmit = e => {
        // Preventing page reload
        e.preventDefault();
        axios.get({
            url:`${process.env.REACT.APP.CONNECTION_STRING}/api/tags`,
            method:'get'
        }).then((err,res) => {
                console.log(err, res)
        })

        // Getting Form Elements
        // ------------------
        const {
            username,
            password
        } = e.target;

        // Form data object
        // ----------------------
        const obj = {
            username: username.value,
            password: password.value
        };

        console.log(obj);
    };

    render() {
        return (
            <div className="login">
                <h2>Log In</h2>
                <hr />

                {/*
          ===================
          Login Form
          ===================
          */}
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form  onSubmit={this.props.handleSubmit} action="submit" id="loginForm" className="center">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-success col-12 mt-2">
                                Log In
                            </button>
                        </form>
                        <p className="mt-3 text-center" >Don't have an account? <a href="/createUser">Create one here!</a></p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}

export default Login;
