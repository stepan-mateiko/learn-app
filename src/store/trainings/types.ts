export type TrainingsType = {
  id: string;
  duration: string;
  trainer: string;
  type: string;
  date: string;
  name: string;
  description: string;
  student: string;
};

export const enum TrainingsActionTypes {
  GET_TRAININGS = "GET_TRAININGS",
  ADD_TRAINING = "ADD_TRAINING",
}

interface GetTrainings {
  type: TrainingsActionTypes.GET_TRAININGS;
  payload: TrainingsType;
}

interface AddTraining {
  type: TrainingsActionTypes.ADD_TRAINING;
  payload: TrainingsType;
}

export type TrainingsActions = GetTrainings | AddTraining;
