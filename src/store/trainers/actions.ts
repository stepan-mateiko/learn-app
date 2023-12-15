import { TrainersActionTypes, TrainersType } from "./types";

export interface GetTrainers {
  type: TrainersActionTypes.GET_TRAINERS;
  payload: TrainersType[];
}

export interface AddTrainer {
  type: TrainersActionTypes.ADD_TRAINER;
  payload: TrainersType;
}

export interface DeleteTrainer {
  type: TrainersActionTypes.DELETE_TRAINER;
  payload: string;
}

export type TrainersAction = GetTrainers | AddTrainer | DeleteTrainer;
