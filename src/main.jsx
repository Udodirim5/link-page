import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import process from 'process';

const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? "/link-page" : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
    <App />
    </BrowserRouter>
  </StrictMode>
);
