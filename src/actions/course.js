import {
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  CREATE_COURSE_SUCCESS
} from "./types";
import courseApi from "../api/mockCourseApi";

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

export function createCourseSuccess(course) {
  return {
    type: CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  return {
    type: UPDATE_COURSE_SUCCESS,
    course
  };
}

export function saveCourse(course) {
  return dispatch =>
    courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
}
