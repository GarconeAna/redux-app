import { combineReducers } from "redux";
import { countReducers } from "./countReducers";

export default combineReducers({
  count: countReducers,
});