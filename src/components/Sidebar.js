import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    this.setState({
      toggleClass: !this.state.toggleClass
    });
  }

  render() {
    const { toggleClass } = this.state;
    return (
      <div>
        <div id={toggleClass ? "sidebar-wrapper-toggle" : "sidebar-wrapper"}>
          <ul className="list-group">
            <div className="hamburger-cancel d-flex">
              <button className="btn ml-auto" onClick={this.toggle}>
                <FontAwesomeIcon icon={faTimes} color="#ea6565" />
              </button>
            </div>
            <li className="list-group-item">
              <a href="#">Account</a>
            </li>
            <li className="list-group-item">
              <a href="#">Settings</a>
            </li>
            <li className="list-group-item">
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>

        <div
          id={
            toggleClass ? "page-content-wrapper-toggle" : "page-content-wrapper"
          }
        >
          <div className={toggleClass ? "hamburger-hide" : ""}>
            <button className="btn" onClick={this.toggle}>
              <FontAwesomeIcon icon={faBars} color="#ea6565" />
            </button>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1>Sidebar </h1>
                <p className="text-wrap">
                  I love apple I love apple I love apple I love apple I love
                  apple I love apple I love apple I love apple I love apple I
                  love apple I love apple I love apple I love apple I love apple
                  I love apple I love apple I love apple I love apple I love
                  apple I love apple I love apple I love apple I love apple I
                  love apple I love apple I love apple I love apple I love apple
                  I love apple I love apple I love apple I love apple I love
                  apple I love apple I love apple I love apple I love apple I
                  love apple I love apple
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
