import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "./types";
import courseApi from "../api/mockCourseApi";

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return dispatch =>
    courseApi
      .getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => {
        throw error;
      });
}
