import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "rebass";
import PropTypes from "prop-types";

import Grid from "../Grid";
import Link from "../Link";
import Button from "../styled/Button";
import { H1 } from "../styled/Heading";

const Planets = ({
  planets = [],
  header = [],
  goToFilms,
  goToResidents,
  goToPlanetDetails,
  fetchPlanets,
  openPlanetModal,
  nextPageUrl,
}) => {
  const page = +useParams().page || 1;

  useEffect(() => {
    fetchPlanets(page);
  }, [fetchPlanets, page]);

  return (
    <Flex flexDirection="column" p={4}>
      <H1>Planets Grid Page {page}</H1>
      <Grid
        data={{
          header,
          values: planets,
          actions: [
            { label: "Go to Films", action: goToFilms, id: "films" },
            {
              label: "Go to Residents",
              action: goToResidents,
              id: "residents",
            },
            { label: "Go to Planet Details", action: goToPlanetDetails },
            { label: "Open Planet Modal", action: openPlanetModal },
          ],
        }}
      />
      <Flex
        width={1}
        justifyContent="space-between"
        flexDirection="row-reverse"
        py={4}
      >
        {nextPageUrl && (
          <Flex justifySelf="flex-end">
            <Link to={`/planets/${page + 1}`}>
              <Button color="#000">Next page</Button>
            </Link>
          </Flex>
        )}
        {page !== 1 && (
          <Link to={`/planets/${page - 1}`}>
            <Button color="#000">Prev page</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

Planets.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object),
  header: PropTypes.arrayOf(PropTypes.string),
  goToFilms: PropTypes.func,
  goToResidents: PropTypes.func,
  goToPlanetDetails: PropTypes.func,
  openPlanetModal: PropTypes.func,
  nextPageUrl: PropTypes.string,
};

export default Planets;
