import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from "../actions/types";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == "_SUCCESS";
}

export default function ajaxStatus(
  state = initialState.numAjaxCallsInProgress,
  action
) {
  if (action.type == BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
