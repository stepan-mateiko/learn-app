import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { trainingsAPI } from "../services";
import { GetTrainings, AddTraining } from "./actions";
import { TrainingsType, TrainingsActions } from "./types";

export const fetchAllTrainings =
  (token: string): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      const trainings = await trainingsAPI.fetchAllTrainings(token);
      dispatch(GetTrainings(trainings));
    } catch (error) {
      console.error("Error fetching trainings:", error);
    }
  };

export const addTrainingOnServer =
  (
    credentials: TrainingsType,
    token: string
  ): ThunkAction<void, RootState, null, TrainingsActions> =>
  async (dispatch) => {
    try {
      await trainingsAPI.addTrainingToServer(credentials, token);

      dispatch(AddTraining(credentials));
    } catch (error) {
      console.error("Error adding training:", error);
    }
  };
