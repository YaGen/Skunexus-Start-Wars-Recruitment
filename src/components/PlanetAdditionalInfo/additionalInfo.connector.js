import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import AdditionalInfo from "./additionalInfo";

import { fetchPlanetAdditions } from "./additionalInfo.actions";
import {
  getPlanetAdditionsData,
  getPlanetAdditionsHeader,
} from "../../selectors/planetAdditions.selectors";

const mapStateToProps = ({ planetAdditions }) => ({
  data: (type) => getPlanetAdditionsData({ planetAdditions })(type),
  header: (type) => getPlanetAdditionsHeader({ planetAdditions })(type),
});

const mapDispatchToProps = {
  fetchPlanetAdditions,
  goBack,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);
