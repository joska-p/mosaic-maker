import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MosaicMaker } from "./components/Mosaic-maker/Mosaic-maker";
import "./styles/global.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <MosaicMaker />
  </StrictMode>
);
