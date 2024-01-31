import { TrainingsActionTypes, TrainingsType } from "./types";

export const GetTrainings = (trainings: TrainingsType[]) => ({
  type: TrainingsActionTypes.GET_TRAININGS,
  payload: trainings,
});

export const AddTraining = (training: TrainingsType) => ({
  type: TrainingsActionTypes.ADD_TRAINING,
  payload: training,
});
