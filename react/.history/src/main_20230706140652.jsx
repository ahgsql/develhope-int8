import React, { lazy } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
const searchParams = new URLSearchParams(document.location.search);
let exerciseApp = `App${searchParams.get("e")}.jsx`;

const App = lazy(() => import(`./exercises/${exerciseApp}`));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
