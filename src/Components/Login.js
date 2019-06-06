import React, { Component } from "react";
import { HeadingText } from "../ReusableComponents/HeadingText";
import { EmailField } from "../ReusableComponents/EmailField";
import { PasswordField } from "../ReusableComponents/PasswordField";
import { SubmitFormButton } from "../ReusableComponents/SubmitFormButton";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-8 m-auto">
          <HeadingText heading="Log In" />
          <p className="lead text-center">Sign in to your Tattle account</p>
          <form>
            <EmailField email_placeholder="Email" />
            <PasswordField password_placeholder="Password" />
            <SubmitFormButton submit_button_text="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
