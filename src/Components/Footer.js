import React, { Component } from "react";
import { Footer } from "../ReusableComponents/Footer";

class FooterSite extends Component {
  render() {
    // WHEN ERROR, WE WILL DISPLAY ERROR
    const error = { error: "Server Down" };
    // WHEN NO ERROR, WE WILL DISPLAY SUCCESS
    // const error = { error: "" };

    if (error.error === "") {
      return <Footer alert_type="success" message="Success" />;
    } else {
      return <Footer alert_type="danger" message={error.error} />;
    }
  }
}

export default FooterSite;
