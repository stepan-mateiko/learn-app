export type StudentsType = {
  firstName: string;
  lastName: string;
  email: string;
  dob?: string;
  address?: string;
  trainers?: string[];
  trainings?: string[];
  ID: string;
  isActive: boolean;
};

export const enum StudentsActionTypes {
  GET_STUDENTS = "GET_STUDENTS",
  UPDATE_STUDENT = "UPDATE_STUDENT",
}
