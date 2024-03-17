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
  photo?: string;
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
  REGISTER_USER = "REGISTER_USER",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  GET_USER_INFO = "GET_USER_INFO",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",
}

interface RegisterUserAction {
  type: UsersActionTypes.REGISTER_USER;
  payload: RegisterType;
}
interface LoginUserAction {
  type: UsersActionTypes.LOGIN_USER;
  payload: LoginType;
}
interface LogoutUserAction {
  type: UsersActionTypes.LOGOUT_USER;
}
interface GetUserInfoAction {
  type: UsersActionTypes.GET_USER_INFO;
  payload: UserType;
}
interface UpdateUserAction {
  type: UsersActionTypes.UPDATE_USER;
  payload: UserType;
}
interface DeleteUserAction {
  type: UsersActionTypes.DELETE_USER;
  payload: { id: string };
}

export type UsersActions =
  | RegisterUserAction
  | GetUserInfoAction
  | UpdateUserAction
  | LoginUserAction
  | LogoutUserAction
  | DeleteUserAction;
