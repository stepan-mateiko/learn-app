import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { Provider } from "react-redux";

import "./styles/index.scss";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
Modal.setAppElement("#root");
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
