import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import css + js bootstrap
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

import "./assets/css/index.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
