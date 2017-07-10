import { CREATE_COURSE } from "./types";

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}
