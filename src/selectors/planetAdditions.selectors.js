import { createSelector } from "reselect";

export const getPlanetAdditions = ({ planetAdditions = {} } = {}) =>
  planetAdditions || {};

export const getPlanetAdditionsData = createSelector(
  getPlanetAdditions,
  (planetAdditions) => (type) =>
    planetAdditions[type] ? Object.values(planetAdditions[type]) : []
);

export const getPlanetAdditionsHeader = createSelector(
  getPlanetAdditions,
  (planetAdditions) => (type) => planetAdditions[`${type}Header`] || []
);
