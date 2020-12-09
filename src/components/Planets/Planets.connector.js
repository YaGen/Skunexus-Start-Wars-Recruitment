import { connect } from "react-redux";
import Planets from "./Planets";
import {
  getPlanetsValues,
  getHeaders,
  getNextPageUrl,
  getPrevPageUrl,
} from "../../selectors/planets.selectors";
import { fetchPlanets } from "./Planets.actions";
import { openEditPlanetModal } from "../Modal/modal.actions";
import { push } from "connected-react-router";

const getPlanetId = (url) => url.split("/").splice(-2, 1)[0];

const mapStateToProps = ({ planets }) => ({
  planets: getPlanetsValues({ planets }),
  header: getHeaders({ planets }),
  nextPageUrl: getNextPageUrl({ planets }),
  prevPageUrl: getPrevPageUrl({ planets }),
});

const mapDispatchToProps = {
  fetchPlanets,
  goToFilms: (action) => push(`/planet/${getPlanetId(action.url)}/films/`),
  goToResidents: (action) =>
    push(`/planet/${getPlanetId(action.url)}/residents/`),
  goToPlanetDetails: (action) => push(`/planet/${getPlanetId(action.url)}`),
  openPlanetModal: openEditPlanetModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
