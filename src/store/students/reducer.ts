import { StudentsActionTypes, StudentsType } from "./types";

export interface StudentsState {
  students: StudentsType[];
}

const initialState: StudentsType[] = [];

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case StudentsActionTypes.GET_STUDENTS:
      return action.payload;

    case StudentsActionTypes.UPDATE_STUDENT:
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );

    default:
      return state;
  }
};

export default userReducer;
