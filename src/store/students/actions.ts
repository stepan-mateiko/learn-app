import { StudentsActionTypes, StudentsType } from "./types";

export interface GetStudents {
  type: StudentsActionTypes.GET_STUDENTS;
  payload: StudentsType[];
}

export interface AddStudent {
  type: StudentsActionTypes.ADD_STUDENT;
  payload: StudentsType;
}

export interface DeleteStudent {
  type: StudentsActionTypes.DELETE_STUDENT;
  payload: string;
}

export type StudentsAction = GetStudents | AddStudent | DeleteStudent;
