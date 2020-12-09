import axios from "axios";
import curriedMiddleware from "../../utils/curriedMiddleware";
import { FETCH_PLANETS } from "../../constants/ActionTypes";
import { fetchPlanetsError, fetchPlanetsSuccess } from "./Planets.actions";

const requestPlanets = async ({ payload }, state, dispatch) => {
  let data;
  try {
    const res = await axios(`https://swapi.dev/api/planets/?page=${payload}`);
    data = res.data;
  } catch (e) {
    dispatch(fetchPlanetsError());
    return;
  }

  dispatch(fetchPlanetsSuccess(data));
};

export const TYPES = {
  [FETCH_PLANETS]: requestPlanets,
};

export default curriedMiddleware(TYPES);
