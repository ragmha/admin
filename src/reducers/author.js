import { LOAD_AUTHORS_SUCCESS } from "../actions/types";
import initialState from "./initialState";

export default function author(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
