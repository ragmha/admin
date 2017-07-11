import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/types";
import initialState from "./initialState";

export default function course(state = initialState.courses, action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case CREATE_COURSE:
      return [...state, Object.assign({}, state, action.course)];
    default:
      return state;
  }
}
