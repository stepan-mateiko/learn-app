export interface UserType {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
  role: string;
}

export const enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  GET_USER_INFO = "GET_USER_INFO",
}
