import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your Tattle account</p>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-info btn-block mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
