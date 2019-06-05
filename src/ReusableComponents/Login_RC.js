import React from "react";

export const Login_RC = props => {
  return (
    <form>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder={props.email_placeholder}
          name="email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder={props.password_placeholder}
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-info btn-block mt-4">
        {props.submit_text}
      </button>
    </form>
  );
};
