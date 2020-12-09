import {
  FETCH_PLANET_ADDITIONS,
  FETCH_PLANET_ADDITIONS_SUCCESS,
} from "../../constants/ActionTypes";

export const initialState = {
  films: {},
  filmsHeader: [
    "title",
    "episode_id",
    "opening_crawl",
    "director",
    "producer",
    "release_date",
  ],
  residents: {},
  residentsHeader: [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
  ],
};

const planetsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FETCH_PLANET_ADDITIONS:
      return {
        ...state,
        films: {},
        residents: {},
      };
    case FETCH_PLANET_ADDITIONS_SUCCESS:
      return {
        ...state,
        [payload.type]: {
          ...payload.data.reduce((prev, cur) => {
            prev[cur.url] = cur;
            return prev;
          }, {}),
        },
      };
    default:
      return state;
  }
};

export default planetsReducer;
