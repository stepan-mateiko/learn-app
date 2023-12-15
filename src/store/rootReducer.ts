import { combineReducers } from "@reduxjs/toolkit";
import trainersReducer from "./trainers/reducer";
import studentsReducer from "./students/reducer";
import trainingsReducer from "./trainings/reducer";
import { userReducer } from "./users/reducer";

const rootReducer = combineReducers({
  trainers: trainersReducer,
  students: studentsReducer,
  trainings: trainingsReducer,
  user: userReducer,
});

export default rootReducer;
