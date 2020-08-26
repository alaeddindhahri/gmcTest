import { combineReducers } from "redux";
import instructorsReducer from "./instructorsReducer";

export default combineReducers({
  instructorReducer: instructorsReducer,
});
