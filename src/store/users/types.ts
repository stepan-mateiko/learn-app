export interface UserType {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export const enum UserActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  GET_USER_INFO = "GET_USER_INFO",
}
