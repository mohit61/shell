import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class InfoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: "col-lg-9",
      col2: "col-lg-3 content2"
    };
  }

  infoPanelSlide() {
    console.log("clicked");
    this.setState({
      col1: "col-lg-12",
      col2: "content2-after"
    });
  }

  render() {
    return (
      <div className="sidebar2 container-fluid">
        <div className="row">
          <div className={`${this.state.col1} content1`}>
            <p>
              f;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjflsf;lakjflsdjfklsjfslkfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj;lakjfls
            </p>
          </div>
          <div className={this.state.col2}>
            <div className="d-flex flex-column">
              <div className="p-4 panel">
                <span className="">INFO PANEL</span>
                <span className="float-right">
                  <button
                    type="button"
                    className="btn cross-btn"
                    onClick={this.infoPanelSlide.bind(this)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </span>
              </div>
              <div className="p-4">Election</div>
              <div className="p-4">Report</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoPanel;
