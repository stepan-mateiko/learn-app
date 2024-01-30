import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { trainingTypesAPI } from "../services";
import { getTrainingTypes } from "./actions";

export const fetchAllTrainingTypes =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
      const trainingTypes = await trainingTypesAPI.fetchAllTrainingTypes();
      dispatch(getTrainingTypes(trainingTypes));
    } catch (error) {
      console.error("Error fetching trainingTypes:", error);
    }
  };
