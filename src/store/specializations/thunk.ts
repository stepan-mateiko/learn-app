import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { specializationsAPI } from "../services";
import { getSpecializations } from "./actions";

export const fetchAllSpecializations =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
      const specializations =
        await specializationsAPI.fetchAllSpecializations();
      dispatch(getSpecializations(specializations));
    } catch (error) {
      console.error("Error fetching specializations:", error);
    }
  };
