import React, { Component } from "react";
import { HeadingText_RC } from "../ReusableComponents/HeadingText_RC";
import { Login_RC } from "../ReusableComponents/Login_RC";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-8 m-auto">
          <HeadingText_RC heading="Log In" />
          <p className="lead text-center">Sign in to your Tattle account</p>
          <Login_RC
            email_placeholder="Email"
            password_placeholder="Password"
            submit_text="Submit"
          />
        </div>
      </div>
    );
  }
}
