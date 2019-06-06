import React from "react";

const closeFooter = () => {
  console.log("clicked");
  className = "footer-dismiss";
};

let className = "footer text-center";

export const Footer = props => {
  return (
    <div className={className}>
      <div className={`alert alert-${props.alert_type}`}>
        <button className="close" type="button" onClick={closeFooter}>
          <span>&times;</span>
        </button>
        <strong>{props.message}</strong>
      </div>
    </div>
  );
};
