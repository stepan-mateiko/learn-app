import { UserActionTypes } from "./types";
import { UserAction } from "./actions";

export const userInitialState = {
  isAuth: false,
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  token: localStorage.getItem("token") || "",
  role: "",
};

export function userReducer(state = userInitialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        isAuth: true,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        token: "",
        role: "",
      };
    case UserActionTypes.GET_USER_INFO:
      return {
        ...state,
        isAuth: true,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role,
      };
    case UserActionTypes.CREATE:
      return {
        ...state,
        isAuth: true,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role,
      };
    case UserActionTypes.UPDATE:
      return {
        ...state,
        isAuth: true,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role,
      };
    case UserActionTypes.DELETE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
