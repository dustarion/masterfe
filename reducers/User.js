import { redux } from "../Constants";

const init = {
  email: "_@masterapp.co"
};

export function user(state = init, action) {
  switch (action.type) {
    case redux.USER_EMAIL:
      return Object.assign({}, state, { email: action.email });
    default:
      return state;
  }
}
