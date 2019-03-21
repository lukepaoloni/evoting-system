import { combineReducers } from "redux";
import accessibility from "./accessibility";
import countdown from "./countdown";
const rootReducer = combineReducers({
  accessibility,
  countdown
});

export default rootReducer;
