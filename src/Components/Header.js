import React, { Component } from "react";
import logo from "../../src/logo_logomark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";

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
              <li className="nav-item nav-link">
                <a className="active">abcc</a>
              </li>
            </ul>
            <a className="nav-link">
              <FontAwesomeIcon icon={faUser} color="#ea6565" />
            </a>
          </div>
        </nav>
        <nav className="navbar d-lg-none d-md-none d-sm-none justify-content-center">
          <div className="px-2 nav-link">
            <a>
              <FontAwesomeIcon icon={faHome} color="#ea6565" /> &raquo;
            </a>
          </div>
          <div className="px-2 nav-link">
            <a>Search &raquo;</a>
          </div>
          <div className="px-2 nav-link ">
            <a className="active">abcc</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
