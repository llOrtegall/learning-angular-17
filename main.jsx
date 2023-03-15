import { createRoot } from "react-dom/client";
import App from "./src/App";
import { StrictMode } from "react";
import "./style.css";

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)