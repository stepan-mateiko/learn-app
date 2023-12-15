import { TrainersAction } from "./actions";
import { TrainersType, TrainersActionTypes } from "./types";

const trainersInitialState: TrainersType[] = [];

const trainersReducer = (
  state = trainersInitialState,
  action: TrainersAction
) => {
  switch (action.type) {
    case TrainersActionTypes.GET_TRAINERS:
      return [...state, action.payload];
    case TrainersActionTypes.ADD_TRAINER:
      return [...state, action.payload];
    case TrainersActionTypes.DELETE_TRAINER:
      return state.filter((trainer) => trainer.id !== action.payload);
    default:
      return state;
  }
};

export default trainersReducer;
