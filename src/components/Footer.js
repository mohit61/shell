import React, { Component } from "react";
import { Footer } from "../reusableComponents/Footer";

class FooterSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerClass: "footer text-center"
    };
  }

  render() {
    // WHEN ERROR, WE WILL DISPLAY ERROR
    const error = { error: "Server Down" };
    // WHEN NO ERROR, WE WILL DISPLAY SUCCESS
    // const error = { error: "" };

    if (error.error === "") {
      return (
        <Footer
          alert_type="success"
          message="Success"
          footerClass={this.state.footerClass}
          closeFooter={() => {
            this.setState({
              footerClass: "footer-dismiss"
            });
          }}
        />
      );
    } else {
      return (
        <Footer
          alert_type="danger"
          message={error.error}
          footerClass={this.state.footerClass}
          closeFooter={() => {
            this.setState({
              footerClass: "footer-dismiss"
            });
          }}
        />
      );
    }
  }
}

export default FooterSite;
