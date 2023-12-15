export type TrainersType = {
  id: string;
  username: string;
  lastName: string;
  firstName: string;
  dob?: string;
  address?: string;
  specialization: string;
  photo?: string;
  students?: string[];
  trainings?: string[];
};

export const enum TrainersActionTypes {
  GET_TRAINERS = "GET_TRAINERS",
  ADD_TRAINER = "ADD_TRAINER",
  DELETE_TRAINER = "DELETE_TRAINER",
}
