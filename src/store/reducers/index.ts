import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { eventReducer } from "./events";

export const rootReducer = combineReducers({
  loginState: loginReducer,
  eventState: eventReducer,
});
