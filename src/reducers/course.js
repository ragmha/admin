export default function course(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, Object.assign({}, state, action.course)];
    default:
      return state;
  }
}
