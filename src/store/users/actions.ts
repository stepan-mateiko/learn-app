import { UserActionTypes } from "./types";

interface CreacteUser {
  type: UserActionTypes.CREATE;
  payload: {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
  };
}
interface UpdateUser {
  type: UserActionTypes.UPDATE;
  payload: {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
  };
}
interface DeleteUser {
  type: UserActionTypes.DELETE;
  payload: string;
}

interface LoginSuccess {
  type: UserActionTypes.LOGIN;
  payload: {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
  };
}

interface Logout {
  type: UserActionTypes.LOGOUT;
}

interface GetUserInfo {
  type: UserActionTypes.GET_USER_INFO;
  payload: {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    token: string;
    role: string;
  };
}

export type UserAction =
  | LoginSuccess
  | Logout
  | GetUserInfo
  | CreacteUser
  | DeleteUser
  | UpdateUser;
