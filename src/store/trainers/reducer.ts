import { TrainersActionTypes, TrainersType } from "./types";

const initialState: TrainersType[] = [];

const trainersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TrainersActionTypes.GET_TRAINERS:
      return action.payload;

    case TrainersActionTypes.UPDATE_TRAINER:
      return state.map((trainer) =>
        trainer.id === action.payload.id ? action.payload : trainer
      );

    default:
      return state;
  }
};

export default trainersReducer;
