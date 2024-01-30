import { TrainingTypesActionTypes, TrainingTypesType } from "./types";

export const getTrainingTypes = (trainingTypes: TrainingTypesType[]) => ({
  type: TrainingTypesActionTypes.GET_TRAINING_TYPES,
  payload: trainingTypes,
});
