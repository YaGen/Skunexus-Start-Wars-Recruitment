import actionCreator from "../../utils/actionCreator";

import {
  FETCH_PLANET_DETAILS,
  FETCH_PLANET_DETAILS_SUCCESS,
  FETCH_PLANET_DETAILS_ERROR,
} from "../../constants/ActionTypes";

export const fetchPlanet = actionCreator(FETCH_PLANET_DETAILS);
export const fetchPlanetSuccess = actionCreator(FETCH_PLANET_DETAILS_SUCCESS);
export const fetchPlanetError = actionCreator(FETCH_PLANET_DETAILS_ERROR);
