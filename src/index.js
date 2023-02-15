import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StickyFooter from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const foot = ReactDOM.createRoot(document.getElementById("foot"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

foot.render(<StickyFooter />);
