import axios from "axios";
import curriedMiddleware from "../../utils/curriedMiddleware";
import { FETCH_PLANET_DETAILS } from "../../constants/ActionTypes";
import { fetchPlanetError, fetchPlanetSuccess } from "./planetDetails.actions";

const requestPlanet = async ({ payload }, state, dispatch) => {
  let data;
  try {
    const res = await axios(`http://swapi.dev/api/planets/${payload}/`);
    data = res.data;
  } catch (e) {
    dispatch(fetchPlanetError());
    return;
  }

  dispatch(fetchPlanetSuccess(data));
};

export const TYPES = {
  [FETCH_PLANET_DETAILS]: requestPlanet,
};

export default curriedMiddleware(TYPES);
