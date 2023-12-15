import { StudentsAction } from "./actions";
import { StudentsType, StudentsActionTypes } from "./types";

const studentsInitialState: StudentsType[] = [];

const studentsReducer = (
  state = studentsInitialState,
  action: StudentsAction
) => {
  switch (action.type) {
    case StudentsActionTypes.GET_STUDENTS:
      return [...state, action.payload];
    case StudentsActionTypes.ADD_STUDENT:
      return [...state, action.payload];
    case StudentsActionTypes.DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export default studentsReducer;
