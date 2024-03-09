export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  ID: string;
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

export interface RegisterType {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userName: string;
  password: string;
  dob?: string;
  address?: string;
  specialization?: string;
  ID: string;
}

export const enum UsersActionTypes {
  ADD_USER = "ADD_USER",
  GET_USER_INFO = "GET_USER_INFO",
  UPDATE_USER = "UPDATE_USER",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  DELETE_USER = "DELETE_USER",
}

interface AddUserAction {
  type: UsersActionTypes.ADD_USER;
  payload: RegisterType;
}
interface GetUserInfoAction {
  type: UsersActionTypes.GET_USER_INFO;
  payload: UserType;
}
interface UpdateUserAction {
  type: UsersActionTypes.UPDATE_USER;
  payload: UserType;
}

interface LoginUserAction {
  type: UsersActionTypes.LOGIN_USER;
  payload: LoginType;
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
  | GetUserInfoAction
  | UpdateUserAction
  | LoginUserAction
  | LogoutUserAction
  | DeleteUserAction;
