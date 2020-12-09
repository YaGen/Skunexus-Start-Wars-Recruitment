import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "@rebass/preset";
import reset from "styled-reset";

import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { configureStore, history } from "./store";

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: system-ui, sans-serif;
    margin: 0;
    overflow-x: hidden;
    display: block;
  }
`;

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
