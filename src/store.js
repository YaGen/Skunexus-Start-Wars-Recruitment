import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import planetsMiddleware from "./components/Planets/Planets.middleware";
import additionalInfoMiddleware from "./components/PlanetAdditionalInfo/additionalInfo.middleware";
import planetMiddleware from "./components/PlanetDetails/planetDetails.middleware";

import createRootReducer from "./reducers";

export const history = createBrowserHistory();

let store;

export const getStore = () => store;

export function configureStore() {
  store = createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        planetsMiddleware,
        additionalInfoMiddleware,
        planetMiddleware
      )
    )
  );
  return store;
}
