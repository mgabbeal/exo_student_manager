import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import students from "./students";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  students: students,
  form: formReducer.plugin({
    "student_edit": (state, action) => {
      // reset form (wipe state) when navigating away from the Student edit page
      switch (action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  })
});
