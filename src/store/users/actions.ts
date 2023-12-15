import { UserActionTypes } from "./types";

interface LoginSuccess {
  type: UserActionTypes.LOGIN;
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

export type UserAction = LoginSuccess | Logout | GetUserInfo;
