import { combineReducers } from "redux";
import courses from "./course";
import authors from "./author";
import ajaxCallsInProgress from "./ajaxStatus";

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
