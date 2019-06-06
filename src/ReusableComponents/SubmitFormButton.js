import React from "react";

export const SubmitFormButton = props => {
  return (
    <button type="submit" className="btn btn-info btn-block mt-4">
      {props.submit_button_text}
    </button>
  );
};
