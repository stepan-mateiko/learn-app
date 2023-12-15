import { TrainingsActionTypes, TrainingsType } from "./types";

export interface GetTrainings {
  type: TrainingsActionTypes.GET_TRAININGS;
  payload: TrainingsType[];
}

export interface AddTrainings {
  type: TrainingsActionTypes.ADD_TRAINING;
  payload: TrainingsType;
}

export interface DeleteTrainings {
  type: TrainingsActionTypes.DELETE_TRAINING;
  payload: string;
}

export type TrainingssAction = GetTrainings | AddTrainings | DeleteTrainings;
