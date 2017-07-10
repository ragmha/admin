import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/types";

export default function course(state = [], action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case CREATE_COURSE:
      return [...state, Object.assign({}, state, action.course)];
    default:
      return state;
  }
}
