import React, { Component } from "react";
import {
  HeadingText,
  SubHeadingOne,
  EmailField,
  PasswordField,
  SubmitFormButton
} from '../reusableComponents'

export default props => (
    <div className="container-fluid" style={styles.container}>
      <HeadingText text="Log In" />
      <SubHeadingOne text="Unlock your tools to fight Fake News"/>
      <form>
        <EmailField email_placeholder="Email" />
        <PasswordField password_placeholder="Password" />
        <SubmitFormButton submit_button_text="Submit" />
      </form>
    </div>
)

const styles={
  container : {
    width: '40rem'
  }
}
