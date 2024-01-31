import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { trainingTypesAPI } from "../services";
import { getTrainingTypes } from "./actions";
import { TrainingTypesActions } from "./types";

export const fetchAllTrainingTypes =
  (): ThunkAction<void, RootState, unknown, TrainingTypesActions> =>
  async (dispatch) => {
    try {
      const trainingTypes = await trainingTypesAPI.fetchAllTrainingTypes();
      dispatch(getTrainingTypes(trainingTypes));
    } catch (error) {
      console.error("Error fetching trainingTypes:", error);
    }
  };
