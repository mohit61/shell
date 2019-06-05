import React, { Component } from "react";

class Footer extends Component {
  render() {
    // const error = { error: "Server Down" };
    const error = { error: "" };
    if (error.error === "") {
      return (
        <div className="footer text-center">
          <div className="alert alert-success">
            <strong>Success</strong>
          </div>
        </div>
      );
    } else {
      return (
        <div className="footer text-center">
          <div className="alert alert-danger">
            <strong>Error : </strong>
            {error.error}
          </div>
        </div>
      );
    }
  }
}

export default Footer;
