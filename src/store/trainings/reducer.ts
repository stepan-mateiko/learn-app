import { TrainingssAction } from "./actions";
import { TrainingsType, TrainingsActionTypes } from "./types";

const trainersInitialState: TrainingsType[] = [];

const trainingsReducer = (
  state = trainersInitialState,
  action: TrainingssAction
) => {
  switch (action.type) {
    case TrainingsActionTypes.GET_TRAININGS:
      return [...state, action.payload];
    case TrainingsActionTypes.ADD_TRAINING:
      return [...state, action.payload];
    case TrainingsActionTypes.DELETE_TRAINING:
      return state.filter((training) => training.id !== action.payload);
    default:
      return state;
  }
};

export default trainingsReducer;
