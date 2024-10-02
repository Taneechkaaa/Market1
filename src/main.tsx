import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { FrameContextProvider } from "./context/FrameContextProvider.tsx";
import { FavoritesContextProvider } from "./context/FavoritesContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesContextProvider>
        <FrameContextProvider>
          <App />
        </FrameContextProvider>
      </FavoritesContextProvider>
    </BrowserRouter>
  </StrictMode>
);
