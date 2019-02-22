import React, { Component } from "react";
import "./UserCreate.css";

class UserCreate extends Component {
    handleSubmit = e => {
        // Preventing page reload
        e.preventDefault();

        // Getting Form Elements
        // ------------------
        const {
            first_name,
            last_name,
            username,
            password,
            confirm_password
        } = e.target;

        // Form data object
        // ----------------------
        const obj = {
            first_name: first_name.value,
            last_name: last_name.value,
            username: username.value,
            password: password.value,
            confirm_password: confirm_password.value
        };

        console.log(obj);
    };

    render() {
        return (
            <div className="user-create">
                <h2>Create Account</h2>
                <hr />

                {/*
          ===================
          UserCreate Form
          ===================
          */}
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form onSubmit={this.handleSubmit} className="center">
                        <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input required
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    className="form-control"
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input required
                                    id="last_name"
                                    type="text"
                                    name="last_name"
                                    className="form-control"
                                    placeholder="Enter last name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input required
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input required
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input required
                                    id="confirm_password"
                                    type="password"
                                    name="confirm_password"
                                    className="form-control"
                                    placeholder="Enter your password again"
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-success col-12 mt-2">
                                Create Account
                            </button>
                        </form>
                        <p className="mt-3 text-center" >Already have an account? <a href="/login">Log in here!</a></p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}

export default UserCreate;
