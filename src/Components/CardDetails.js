import React, { Component } from "react";

export default class CardDetails extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div className="display-4 mt-5 text-center">
        {`This is information regarding card number - ${id}`}
      </div>
    );
  }
}