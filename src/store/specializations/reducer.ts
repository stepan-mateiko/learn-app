import { SpecializationsActionTypes, SpecializationsType } from "./types";

const initialState: SpecializationsType[] = [];

const specializationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SpecializationsActionTypes.GET_SPECIALIZATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default specializationsReducer;
