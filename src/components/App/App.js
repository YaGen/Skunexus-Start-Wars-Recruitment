import { Route, Switch } from "react-router-dom";

import Planets from "../Planets/Planets.connector";
import NavBar from "../NavBar";
import PlanetAdditionalInfo from "../PlanetAdditionalInfo/additionalInfo.connector";
import PlanetDetails from "../PlanetDetails/planetDetails.connector";
import Modal from "../Modal/modal.connector";
import Toast from "../Toast/toast.connector";
import { Flex } from "rebass";

function App() {
  return (
    <Flex flexDirection="column">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Planets />
        </Route>
        <Route path="/planets/:page">
          <Planets />
        </Route>
        <Route path="/planet/:planetId/:infoType">
          <PlanetAdditionalInfo />
        </Route>
        <Route path="/planet/:planetId">
          <PlanetDetails />
        </Route>
      </Switch>
      <Modal />
      <Toast />
    </Flex>
  );
}

export default App;
