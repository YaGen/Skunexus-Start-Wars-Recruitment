import actionCreator from "../../utils/actionCreator";

import {
  FETCH_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_ERROR,
} from "../../constants/ActionTypes";

export const fetchPlanets = actionCreator(FETCH_PLANETS);

export const fetchPlanetsSuccess = actionCreator(FETCH_PLANETS_SUCCESS);

export const fetchPlanetsError = actionCreator(FETCH_PLANETS_ERROR);
