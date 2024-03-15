import { UsersActions, UserType, LoginType, RegisterType } from "./types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { userAPI } from "../services";
import {
  addUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserInfo,
} from "./actions";

export const registerUserAsync =
  (
    credentials: RegisterType
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      dispatch(addUser(credentials));
      await userAPI.register(credentials);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

export const fetchUser =
  (
    userName: string,
    token: string
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      const res = await userAPI.getUserInfo(userName, token);

      dispatch(getUserInfo(res?.data));
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

export const loginUserAsync =
  (credentials: LoginType): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      const response = await userAPI.login(credentials);
      dispatch(loginUser(response.data));
    } catch (error: any) {
      console.error(
        "Error logging in:",
        error.response.status,
        error.response.data.message
      );
      alert(error.response.data.message);
    }
  };

export const updateUserAsync =
  (
    ID: string,
    credentials: UserType,
    token: string
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
    token: string
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      await userAPI.addPhotoOnServer(formData, token);
      const res = await userAPI.updateUserOnServer(ID, credentials, token);
      dispatch(updateUser(res?.data));
    } catch (error) {
      console.error("Error adding photo", error);
    }
  };

export const deleteUserAsync =
  (
    id: string,
    token: string
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      dispatch(deleteUser(id));
      await userAPI.deleteUserFromTheServer(id, token);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
