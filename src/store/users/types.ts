export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  id: string;
  userName: string;
  password: string;
  dob?: string;
  address?: string;
  specialization?: string;
}

export interface LoginType {
  userName: string;
  password: string;
}

export const enum UsersActionTypes {
  ADD_USER = "ADD_USER",
  UPDATE_USER = "UPDATE_USER",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  DELETE_USER = "DELETE_USER",
}

interface AddUserAction {
  type: UsersActionTypes.ADD_USER;
  payload: UserType;
}

interface UpdateUserAction {
  type: UsersActionTypes.UPDATE_USER;
  payload: UserType;
}

interface LoginUserAction {
  type: UsersActionTypes.LOGIN_USER;
  payload: UserType;
}

interface LogoutUserAction {
  type: UsersActionTypes.LOGOUT_USER;
}

interface DeleteUserAction {
  type: UsersActionTypes.DELETE_USER;
  payload: { id: string };
}

export type UsersActions =
  | AddUserAction
  | UpdateUserAction
  | LoginUserAction
  | LogoutUserAction
  | DeleteUserAction;
