import React from "react";
import { render } from "react-dom";
import "./index.css";
import { App } from "./components/App";
import { Provider } from 'react-redux';
import { store } from './stores/store';
render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root"));
