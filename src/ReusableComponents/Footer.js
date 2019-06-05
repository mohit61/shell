import React from "react";

export const Footer_RC = props => {
  return (
    <div className="footer text-center">
      <div className={`alert alert-${props.alert_type}`}>
        <strong>{props.message}</strong>
      </div>
    </div>
  );
};
