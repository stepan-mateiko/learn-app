import { StudentsActionTypes, StudentsType } from "./types";

export const getStudents = (students: StudentsType[]) => ({
  type: StudentsActionTypes.GET_STUDENTS,
  payload: students,
});

export const updateStudent = (updatedStudent: StudentsType) => ({
  type: StudentsActionTypes.UPDATE_STUDENT,
  payload: updatedStudent,
});
