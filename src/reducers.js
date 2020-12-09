import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import planets from "./components/Planets/Planets.reducer";
import planetAdditions from "./components/PlanetAdditionalInfo/additionalInfo.reducer";
import planet from "./components/PlanetDetails/planetDetails.reducer";
import modal from "./components/Modal/modal.reducer";
import toast from "./components/Toast/toast.reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    planets,
    planetAdditions,
    planet,
    modal,
    toast,
  });

export default createRootReducer;
