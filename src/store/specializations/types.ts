export type SpecializationsType = {
  ID: string;
  specialization: string;
};

export const enum SpecializationsActionTypes {
  GET_SPECIALIZATIONS = "GET_SPECIALIZATIONS",
}

interface getSpecializations {
  type: SpecializationsActionTypes.GET_SPECIALIZATIONS;
  payload: SpecializationsType[];
}

export type SpecializationActions = getSpecializations;
