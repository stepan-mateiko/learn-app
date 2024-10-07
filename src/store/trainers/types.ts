export type TrainersType = {
  firstName: string;
  lastName: string;
  email: string;
  specialization: string;
  students?: string[];
  trainings?: string[];
  ID: string;
  isActive: boolean;
};

export const enum TrainersActionTypes {
  GET_TRAINERS = "GET_TRAINERS",
  UPDATE_TRAINER = "UPDATE_TRAINER",
}
