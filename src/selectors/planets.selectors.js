import { createSelector } from "reselect";

export const getPlanets = ({ planets = {} } = {}) => planets || {};

export const getHeaders = createSelector(
  getPlanets,
  (planets = {}) => planets.headers || []
);

export const getPlanetsValues = createSelector(
  getPlanets,
  (planets = {}) => planets.values || []
);

export const getNextPageUrl = createSelector(
  getPlanets,
  (planets = {}) => planets.nextPlanetsPageUrl
);

export const getPrevPageUrl = createSelector(
  getPlanets,
  (planets = {}) => planets.prevPlanetsPageUrl
);
