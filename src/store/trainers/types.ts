export type TrainersType = {
  firstName: string;
  lastName: string;
  email: string;
  specialization: string;
  students?: string[];
  trainings?: string[];
  id: string;
  isActive: boolean;
};

export const enum TrainersActionTypes {
  GET_TRAINERS = "GET_TRAINERS",
  UPDATE_TRAINER = "UPDATE_TRAINER",
}
