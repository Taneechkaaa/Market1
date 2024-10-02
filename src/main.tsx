import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { FrameContextProvider } from "./context/FrameContextProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FrameContextProvider>
        <App />
      </FrameContextProvider>
    </BrowserRouter>
  </StrictMode>
);
