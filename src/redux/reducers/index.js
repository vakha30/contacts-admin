import { combineReducers } from "redux";

import auth from "./auth";
import contacts from "./contacts";

const rootReducer = combineReducers({
  auth,
  contacts,
});

export default rootReducer;
