import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    this.setState(prevState => ({
      toggleClass: !prevState.toggleClass
    }));
  }

  render() {
    const { toggleClass } = this.state;
    return (
      <div>
        <div id={toggleClass ? "sidebar-wrapper-toggle" : "sidebar-wrapper"}>
          <ul className="list-group">
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <button className="btn" onClick={this.toggle}>
                  <FontAwesomeIcon icon={faBars} color="#ea6565" />
                </button>
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
