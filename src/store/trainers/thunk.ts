import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { trainersAPI } from "../services";
import { getTrainers, updateTrainer } from "./actions";

export const fetchAllTrainers =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
      const trainers = await trainersAPI.fetchAllTrainers();
      dispatch(getTrainers(trainers));
    } catch (error) {
      console.error("Error fetching trainers:", error);
    }
  };

export const updateTrainerOnServer =
  (id: string, credentials: any): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      const response = await trainersAPI.updateTrainerOnServer(id, credentials);
      const updatedTrainer = response?.data;
      if (updatedTrainer) {
        dispatch(updateTrainer(updatedTrainer));
      } else {
        console.error("Error updating trainer: Updated trainer is undefined");
      }
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  };
