import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { studentsAPI } from "../services";
import { getStudents, updateStudent } from "./actions";

export const fetchAllStudents =
  (token: string): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      const students = await studentsAPI.fetchAllStudents(token);
      dispatch(getStudents(students));
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

export const updateStudentOnServer =
  (
    ID: string,
    credentials: any,
    token: string
  ): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      const response = await studentsAPI.updateStudentOnServer(
        ID,
        credentials,
        token
      );
      const updatedStudent = response?.data;
      if (updatedStudent) {
        dispatch(updateStudent(updatedStudent));
      } else {
        console.error("Error updating student: Updated student is undefined");
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };
