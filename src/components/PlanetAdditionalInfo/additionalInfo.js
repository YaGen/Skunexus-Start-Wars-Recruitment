import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";
import Button from "../styled/Button";
import { H1 } from "../styled/Heading";
import { Flex } from "rebass";

const PlanetAdditionalInfo = ({
  fetchPlanetAdditions,
  header,
  data,
  goBack,
}) => {
  const { planetId, infoType } = useParams();

  useEffect(() => {
    fetchPlanetAdditions({ planetId, type: infoType });
  }, [planetId, infoType]);

  return (
    <Flex flexDirection="column" p={4} pt={2}>
      <H1>{infoType === "films" ? "Films" : "People"}</H1>
      <Grid
        data={{
          header: header(infoType),
          values: data(infoType),
        }}
      />

      <Button width={"150px"} mt={4} color="#3867d6" onClick={goBack}>
        Go back
      </Button>
    </Flex>
  );
};

PlanetAdditionalInfo.propTypes = {
  fetchPlanetAdditions: PropTypes.func,
  header: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  goBack: PropTypes.func,
};

export default PlanetAdditionalInfo;
