export type TrainingsType = {
  id: string;
  duration: number;
  trainer: string;
  type: string;
  date: string;
  name: string;
  description: string;
  students?: string[];
};

export const enum TrainingsActionTypes {
  GET_TRAININGS = "GET_TRAININGS",
  ADD_TRAINING = "ADD_TRAINING",
  DELETE_TRAINING = "DELETE_TRAINING",
}
