import React, { Component } from "react";
import logo from "../../src/tattle1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img alt="logo" src={logo} />
            </a>
            <ul className="navbar-nav hide">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tattle &raquo;
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search &raquo;
                </a>
              </li>
              <li className="active nav-item">
                <a className="nav-link">abcc</a>
              </li>
            </ul>
            <a className="nav-link">
              <FontAwesomeIcon icon={faUser} color="#ea6565" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
