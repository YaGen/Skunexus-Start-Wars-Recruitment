import {
  FETCH_PLANETS,
  FETCH_PLANETS_ERROR,
  FETCH_PLANETS_SUCCESS,
} from "../../constants/ActionTypes";

export const initialState = {
  values: [],
  headers: [
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population",
    "residents",
    "films",
  ],
  nextPlanetsPageUrl: null,
  prevPlanetsPageUrl: null,
};

const planetsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FETCH_PLANETS:
      return state;
    case FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        values: payload.results.map((result) => ({
          ...result,
          films: result.films ? result.films.length : 0,
          residents: result.residents ? result.residents.length : 0,
        })),
        nextPlanetsPageUrl: payload.next,
        prevPlanetsPageUrl: payload.prev,
      };
    case FETCH_PLANETS_ERROR:
      return state;
    default:
      return state;
  }
};

export default planetsReducer;
