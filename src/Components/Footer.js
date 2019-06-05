import React, { Component } from "react";
import { Footer_RC } from "../ReusableComponents/Footer_RC";

class Footer extends Component {
  render() {
    // WHEN ERROR, WE WILL DISPLAY ERROR
    const error = { error: "Server Down" };
    // WHEN NO ERROR, WE WILL DISPLAY SUCCESS
    // const error = { error: "" };

    if (error.error === "") {
      return <Footer_RC alert_type="success" message="Success" />;
    } else {
      return <Footer_RC alert_type="danger" message={error.error} />;
    }
  }
}

export default Footer;
