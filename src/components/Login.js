import React, { Component } from "react";
import { HeadingText } from "../reusableComponents/HeadingText";
import { EmailField } from "../reusableComponents/EmailField";
import { PasswordField } from "../reusableComponents/PasswordField";
import { SubmitFormButton } from "../reusableComponents/SubmitFormButton";

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
