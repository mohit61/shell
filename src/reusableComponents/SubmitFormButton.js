import React from "react";

export const SubmitFormButton = props => {
  return (
    <button type="submit" className="btn btn-submit btn-block mt-4">
      {props.submit_button_text}
    </button>
  );
};
