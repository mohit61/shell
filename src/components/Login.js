import React, { Component } from "react";

import {
  HeadingText,
  SubHeadingOne,
  EmailField,
  PasswordField,
  SubmitFormButton
} from '../reusableComponents'

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-8 m-auto">
          <HeadingText text="Log In" />
          <SubHeadingOne text="Unlock your tools to fight Fake News"/>
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
