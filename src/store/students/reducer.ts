import { StudentsActionTypes, StudentsType } from "./types";

const initialState: StudentsType[] = [];

const studentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case StudentsActionTypes.GET_STUDENTS:
      return action.payload;

    case StudentsActionTypes.UPDATE_STUDENT:
      return state.map((student) =>
        student.ID === action.payload.ID ? action.payload : student
      );

    default:
      return state;
  }
};

export default studentsReducer;
