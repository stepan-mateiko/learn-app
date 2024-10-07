import { TrainersActionTypes, TrainersType } from "./types";

export const getTrainers = (students: TrainersType[]) => ({
  type: TrainersActionTypes.GET_TRAINERS,
  payload: students,
});

export const updateTrainer = (updatedTrainer: TrainersType) => ({
  type: TrainersActionTypes.UPDATE_TRAINER,
  payload: updatedTrainer,
});
