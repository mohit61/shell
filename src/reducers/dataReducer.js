import { DATA } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case DATA:
      return action.payload;
    default:
      return state;
  }
}
