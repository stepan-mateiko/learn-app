import { TrainingTypesActionTypes, TrainingTypesType } from "./types";

const initialState: TrainingTypesType[] = [];

const trainingTypesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TrainingTypesActionTypes.GET_TRAINING_TYPES:
      return action.payload;
    default:
      return state;
  }
};

export default trainingTypesReducer;
