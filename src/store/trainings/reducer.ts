import { TrainingsType, TrainingsActionTypes } from "./types";

const initialState: TrainingsType[] = [];

const trainingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TrainingsActionTypes.GET_TRAININGS:
      return action.payload;
    case TrainingsActionTypes.ADD_TRAINING:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default trainingsReducer;
