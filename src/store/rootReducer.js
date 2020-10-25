import { combineReducers } from "redux";
import { DataStore } from "./contentStore";

const rootReducer = combineReducers({
  DataStore: DataStore,
});

export default rootReducer;
