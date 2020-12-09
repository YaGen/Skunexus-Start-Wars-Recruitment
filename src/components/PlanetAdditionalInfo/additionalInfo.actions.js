import actionCreator from "../../utils/actionCreator";

import {
  FETCH_PLANET_ADDITIONS,
  FETCH_PLANET_ADDITIONS_SUCCESS,
  FETCH_PLANET_ADDITIONS_ERROR,
} from "../../constants/ActionTypes";

export const fetchPlanetAdditions = actionCreator(FETCH_PLANET_ADDITIONS);
export const fetchPlanetAdditionsSuccess = actionCreator(
  FETCH_PLANET_ADDITIONS_SUCCESS
);
export const fetchPlanetAdditionsError = actionCreator(
  FETCH_PLANET_ADDITIONS_ERROR
);
