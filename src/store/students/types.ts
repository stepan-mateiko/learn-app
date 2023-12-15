export type StudentsType = {
  id: string;
  username: string;
  lastName: string;
  firstName: string;
  dob?: string;
  address?: string;
  specialization: string;
  photo?: string;
  trainers?: string[];
  trainings?: string[];
};

export const enum StudentsActionTypes {
  GET_STUDENTS = "GET_STUDENTS",
  ADD_STUDENT = "ADD_STUDENT",
  DELETE_STUDENT = "DELETE_STUDENT",
}
