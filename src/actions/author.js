import AuthorApi from "../api/mockAuthorApi";
import { LOAD_AUTHORS_SUCCESS } from "./types";

export function loadAuthorSuccess(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return dispatch =>
    AuthorApi.getAllAuthors()
      .then(authors => dispatch(loadAuthorSuccess(authors)))
      .catch(error => {
        throw error;
      });
}
