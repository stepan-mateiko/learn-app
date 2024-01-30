import { UsersActions, UsersActionTypes, UserType } from "./types";

export const addUser = (user: UserType): UsersActions => ({
  type: UsersActionTypes.ADD_USER,
  payload: user,
});

export const updateUser = (user: UserType): UsersActions => ({
  type: UsersActionTypes.UPDATE_USER,
  payload: user,
});

export const loginUser = (user: UserType): UsersActions => ({
  type: UsersActionTypes.LOGIN_USER,
  payload: user,
});

export const logoutUser = (): UsersActions => ({
  type: UsersActionTypes.LOGOUT_USER,
});

export const deleteUser = (id: string): UsersActions => ({
  type: UsersActionTypes.DELETE_USER,
  payload: { id },
});
