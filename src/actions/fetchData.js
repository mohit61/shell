import { ERRORS } from "./types";

export const data = () => {
  return {
    type: ERRORS,
    payload: "Content not found"
  };
};
