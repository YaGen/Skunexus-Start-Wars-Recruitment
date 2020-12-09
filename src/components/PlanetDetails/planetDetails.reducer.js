import { FETCH_PLANET_DETAILS_SUCCESS } from "../../constants/ActionTypes";

export const initialState = {
  planet: {},
};

const planetDetailsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FETCH_PLANET_DETAILS_SUCCESS:
      return {
        planet: payload,
      };
    default:
      return state;
  }
};

export default planetDetailsReducer;
