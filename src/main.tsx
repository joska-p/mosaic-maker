import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MosaicMaker } from "./components/Mosaic-maker/Mosaic-maker";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MosaicMaker />
  </StrictMode>
);
