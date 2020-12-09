import { connect } from "react-redux";
import { goBack } from "connected-react-router";

import PlanetDetails from "./planetDetails";
import { fetchPlanet } from "./planetDetails.actions";

const mapStateToProps = ({ planet: planetState }) => {
  return {
    planet: planetState.planet,
  };
};

const mapDispatchToProps = {
  fetchPlanet,
  goBack,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);
