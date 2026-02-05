import { UsersActions, UserType, LoginType, RegisterType } from "./types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { authAPI, userAPI } from "../services";
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserInfo,
  logoutUser,
} from "./actions";

export const registerUserAsync =
  (
    credentials: RegisterType,
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      localStorage.setItem("token", "test-token");
      dispatch(registerUser(credentials));
      await authAPI.register(credentials);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
export const loginUserAsync =
  (credentials: LoginType): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem("token", response.data.token);
      dispatch(loginUser(response.data.existingUser));
    } catch (error: any) {
      console.error(
        "Error logging in:",
        error.response.status,
        error.response.data.message,
      );
      alert(error.response.data.message);
    }
  };

export const logOutUserAsync =
  (token: string): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch(logoutUser());
      await authAPI.logOut(token);
    } catch (error: any) {
      console.error("Error logging out:", error.response.status, error);
    }
  };

export const fetchUser =
  (
    userName: string,
    token: string,
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      const res = await userAPI.getUserInfo(userName, token);

      dispatch(getUserInfo(res?.data));
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

export const updateUserAsync =
  (
    ID: string,
    credentials: UserType,
    token: string,
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      const res = await userAPI.updateUserOnServer(ID, credentials, token);

      dispatch(updateUser(res?.data));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

export const addPhotoAsync =
  (
    ID: string,
    credentials: UserType,
    formData: FormData,
    token: string,
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      const photoUrl = await userAPI.addPhotoOnServer(formData, token);

      const res = await userAPI.updateUserOnServer(
        ID,
        { ...credentials, photo: photoUrl },
        token,
      );

      dispatch(updateUser(res?.data));
    } catch (error) {
      console.error("Error adding photo", error);
    }
  };

export const deleteUserAsync =
  (
    id: string,
    token: string,
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      dispatch(deleteUser(id));
      localStorage.removeItem("token");
      await userAPI.deleteUserFromTheServer(id, token);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
