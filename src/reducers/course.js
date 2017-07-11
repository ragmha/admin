import {
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS
} from "../actions/types";
import initialState from "./initialState";

export default function course(state = initialState.courses, action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;

    case CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];

    case UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
