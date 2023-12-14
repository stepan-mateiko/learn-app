import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";

import "./styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
Modal.setAppElement("#root");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
