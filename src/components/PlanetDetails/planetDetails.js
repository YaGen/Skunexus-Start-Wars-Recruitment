import PropTypes from "prop-types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex, Box } from "rebass";
import styled from "styled-components";

import B from "../styled/B";
import { H1, H2 } from "../styled/Heading";
import Button from "../styled/Button";

const DetailField = styled(Flex).attrs({
  my: 3,
  p: 1,
})`
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

const PlanetDetails = ({ planet, fetchPlanet, goBack }) => {
  const page = +useParams().planetId || 1;

  useEffect(() => {
    fetchPlanet(page);
  }, [page]);

  return (
    <Flex px={4} flexDirection="column">
      <H1>Planet {planet.name}</H1>
      <Box p={3} backgroundColor={"#EEE"} width="400px">
        <H2>Details</H2>
        {Object.entries(planet).map(([key, value]) => {
          return key !== "url" && key !== "name" && !Array.isArray(value) ? (
            <DetailField>
              <B>{key.split("_").join(" ")}:</B> {value}
            </DetailField>
          ) : null;
        })}
      </Box>
      <Button width={"150px"} mt={4} color="#3867d6" onClick={goBack}>
        Go back
      </Button>
    </Flex>
  );
};

PlanetDetails.propTypes = {
  planet: PropTypes.object,
  fetchPlanet: PropTypes.func,
  goBack: PropTypes.func,
};

export default PlanetDetails;
