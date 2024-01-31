import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { trainingsAPI } from "../services";
import { GetTrainings, AddTraining } from "./actions";
import { TrainingsType, TrainingsActions } from "./types";

export const fetchAllTrainings =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
      const trainings = await trainingsAPI.fetchAllTrainings();
      dispatch(GetTrainings(trainings));
    } catch (error) {
      console.error("Error fetching trainings:", error);
    }
  };

export const addTrainingOnServer =
  (
    credentials: TrainingsType
  ): ThunkAction<void, RootState, null, TrainingsActions> =>
  async (dispatch) => {
    try {
      await trainingsAPI.addTrainingToServer(credentials);

      dispatch(AddTraining(credentials));
    } catch (error) {
      console.error("Error adding training:", error);
    }
  };
