import { UsersActions, UserType, LoginType } from "./types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { userAPI } from "../services";
import { addUser, loginUser, updateUser, deleteUser } from "./actions";

export const registerUserAsync =
  (credentials: UserType): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      await userAPI.addUserToServer(credentials);

      dispatch(addUser(credentials));
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
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

export const updateUserAsync =
  (
    id: string,
    credentials: UserType
  ): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      const res = await userAPI.updateUserOnServer(id, credentials);

      dispatch(updateUser(res?.data));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

export const deleteUserAsync =
  (id: string): ThunkAction<void, RootState, null, UsersActions> =>
  async (dispatch) => {
    try {
      await userAPI.deleteUserFromTheServer(id);

      dispatch(deleteUser(id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
