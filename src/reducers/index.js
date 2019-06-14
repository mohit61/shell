import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import dataReducer from "./dataReducer";
import breadcrumbs from "./breadcrumbs";

export default combineReducers({
  errors: errorReducer,
  fetch: dataReducer,
  breadcrumbs: breadcrumbs
});
