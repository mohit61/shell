import React from "react";

export const PasswordField = props => {
  return (
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        placeholder={props.password_placeholder}
        name="password"
      />
    </div>
  );
};
