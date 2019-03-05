import { combineReducers } from "redux";
import { user } from "./User";
import { redux } from "../Constants";

const appReducer = combineReducers({
  user
});

const rootReducer = (state, action) => {
  if (action.type === redux.RESET_ALL) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
