import React from "react";

export const Footer = props => {
  return (
    <div className={props.footerClass}>
      <div className={`alert alert-${props.alert_type}`}>
        <button className="close" type="button" onClick={props.closeFooter}>
          <span>&times;</span>
        </button>
        <strong>{props.message}</strong>
      </div>
    </div>
  );
};
