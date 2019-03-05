import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
