import React, { Component } from "react";
import logo from "../../src/logo_logomark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false
    };
  }

  userPopup() {
    this.setState({
      popup: !this.state.popup
    });
    console.log(this.state.popup);
  }

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
            <Popup
              on={"hover"}
              trigger={
                <a
                  className="nav-link"
                  onMouseEnter={this.userPopup.bind(this)}
                  onMouseLeave={this.userPopup.bind(this)}
                >
                  <FontAwesomeIcon icon={faUser} color="#ea6565" />
                </a>
              }
              position="bottom right"
            >
              <div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#">Profile</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </Popup>
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
