import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { specializationsAPI } from "../services";
import { getSpecializations } from "./actions";
import { SpecializationActions } from "./types";

export const fetchAllSpecializations =
  (): ThunkAction<void, RootState, unknown, SpecializationActions> =>
  async (dispatch) => {
    try {
      const specializations =
        await specializationsAPI.fetchAllSpecializations();
      dispatch(getSpecializations(specializations));
    } catch (error) {
      console.error("Error fetching specializations:", error);
    }
  };
