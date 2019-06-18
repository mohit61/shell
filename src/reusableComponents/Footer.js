import React from "react";

export const Footer = ({ footerClass, alert_type, closeFooter, message }) => {
  return (
    <div className={footerClass}>
      <div className={`alert alert-${alert_type}`}>
        <button className="close" type="button" onClick={closeFooter}>
          <span>&times;</span>
        </button>
        <strong>{message}</strong>
      </div>
    </div>
  );
};
