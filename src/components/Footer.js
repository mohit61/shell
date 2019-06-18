import React, { Component } from "react";
import { Footer } from "../reusableComponents/Footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import IsEmpty from "is-empty";

class FooterSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      footerClass: "footer text-center"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    // WHEN ERROR, WE WILL DISPLAY ERROR
    // const error = { error: "Server Down" };
    // WHEN NO ERROR, WE WILL DISPLAY SUCCESS
    // const error = { error: "" };

    const { errors } = this.state;

    // if (IsEmpty(errors)) {
    //   return (
    //     <Footer
    //       alert_type="success"
    //       message="Success"
    //       footerClass={this.state.footerClass}
    //       closeFooter={() => {
    //         this.setState({
    //           footerClass: "footer-dismiss"
    //         });
    //       }}
    //     />
    //   );
    // } else

    if (!IsEmpty(errors)) {
      return (
        <Footer
          alert_type="danger"
          message={errors}
          footerClass={this.state.footerClass}
          closeFooter={() => {
            this.setState({
              footerClass: "footer-dismiss"
            });
          }}
        />
      );
    } else {
      return null;
    }
  }
}

FooterSite.prototypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(FooterSite);
