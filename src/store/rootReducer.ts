import { combineReducers } from "@reduxjs/toolkit";
import trainersReducer from "./trainers/reducer";
import studentsReducer from "./students/reducer";
import trainingsReducer from "./trainings/reducer";
import usersReducer from "./users/reducer";
import specializationsReducer from "./specializations/reducer";
import trainingTypesReducer from "./trainingTypes/reducer";

const rootReducer = combineReducers({
  trainers: trainersReducer,
  students: studentsReducer,
  trainings: trainingsReducer,
  user: usersReducer,
  specializations: specializationsReducer,
  trainingTypes: trainingTypesReducer,
});

export default rootReducer;
