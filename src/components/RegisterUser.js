import React, { Component } from "react";
import { SubmitFormButton } from "../reusableComponents/SubmitFormButton";
import { TextFieldGroup } from "../reusableComponents/TextFieldGroup";
import { HeadingText } from "../reusableComponents/HeadingText";
import { Dropdown } from "../reusableComponents/Dropdown";
import { UploadInput } from "../reusableComponents/UploadInput";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <HeadingText text="Sign Up" />
              <p className="lead text-center">Create your Tattle account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  // error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  // error={errors.email}
                />
                <Dropdown
                  name="role"
                  list={[
                    "Administrator",
                    "Editor",
                    "Author",
                    "Contributor",
                    "Subscriber"
                  ]}
                  onChange={this.onChange}
                />
                <UploadInput margin_bottom="mb-3" label="Upload image" />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  // error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  // error={errors.password2}
                />
                <SubmitFormButton submit_button_text="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterUser;
