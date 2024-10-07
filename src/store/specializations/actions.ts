import { SpecializationsActionTypes, SpecializationsType } from "./types";

export const getSpecializations = (specializations: SpecializationsType[]) => ({
  type: SpecializationsActionTypes.GET_SPECIALIZATIONS,
  payload: specializations,
});
