export type TrainingTypesType = {
  ID: string;
  trainingType: string;
};

export const enum TrainingTypesActionTypes {
  GET_TRAINING_TYPES = "GET_TRAINING_TYPES",
}

interface getTrainingTypes {
  type: TrainingTypesActionTypes.GET_TRAINING_TYPES;
  payload: TrainingTypesType[];
}

export type TrainingTypesActions = getTrainingTypes;
