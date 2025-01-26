import React from "react";
import { createRoot } from "react-dom/client";
import { MosaicMaker } from "../lib/components/Mosaic-maker/Mosaic-maker";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <React.StrictMode>
    <MosaicMaker />
  </React.StrictMode>
);
