import { redux } from "../Constants";

export function updateEmail(email) {
  return {
    type: redux.USER_EMAIL,
    email
  };
}
