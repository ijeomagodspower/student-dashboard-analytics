import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DashboardProvider } from "./assets/DashboardProvider.tsx";
import { EditProvider } from "./assets/EditProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardProvider>
      <EditProvider>
        <App />
      </EditProvider>
    </DashboardProvider>
  </StrictMode>,
);
