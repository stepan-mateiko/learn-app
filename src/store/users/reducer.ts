import {
  LoginType,
  RegisterType,
  UsersActions,
  UsersActionTypes,
  UserType,
} from "./types";

const initialState: UserType = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  id: "",
  userName: "",
  password: "",
};

const usersReducer = (
  state = initialState,
  action: UsersActions
): UserType | LoginType | RegisterType => {
  switch (action.type) {
    case UsersActionTypes.ADD_USER:
      return action.payload;
    case UsersActionTypes.GET_USER_INFO:
      return action.payload;
    case UsersActionTypes.UPDATE_USER:
      return action.payload;
    case UsersActionTypes.LOGIN_USER:
      return action.payload;
    case UsersActionTypes.LOGOUT_USER:
      return state;
    case UsersActionTypes.DELETE_USER:
      return state;
    default:
      return state;
  }
};

export default usersReducer;
