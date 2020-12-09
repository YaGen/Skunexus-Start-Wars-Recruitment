import axios from "axios";
import curriedMiddleware from "../../utils/curriedMiddleware";
import { FETCH_PLANET_ADDITIONS } from "../../constants/ActionTypes";
import {
  fetchPlanetAdditionsError,
  fetchPlanetAdditionsSuccess,
} from "./additionalInfo.actions";

const requestPlanetAdditions = async ({ payload }, state, dispatch) => {
  let data;
  try {
    const planet = await axios(
      `http://swapi.dev/api/planets/${payload.planetId}/`
    );
    const additionalInfo = planet.data[payload.type];
    console.log(additionalInfo);
    const additionalInfoRes = await Promise.all(
      additionalInfo.map((url) => axios(url))
    );
    data = additionalInfoRes.map((res) => res.data);
  } catch (e) {
    dispatch(fetchPlanetAdditionsError());
    return;
  }

  dispatch(
    fetchPlanetAdditionsSuccess({
      data,
      type: payload.type,
    })
  );
};

export const TYPES = {
  [FETCH_PLANET_ADDITIONS]: requestPlanetAdditions,
};

export default curriedMiddleware(TYPES);
