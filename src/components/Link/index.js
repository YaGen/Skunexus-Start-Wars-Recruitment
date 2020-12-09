import { Link as RouterLink } from "react-router-dom";
import { Link as RebassLink } from "rebass";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-anonymous-default-export
const Link = (props) => <RebassLink {...props} as={RouterLink} />;

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
