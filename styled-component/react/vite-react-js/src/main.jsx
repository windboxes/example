import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

import { TailwindStyledProvider } from "@windboxes/react";
import twCssModule from "@/styles/tailwind.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TailwindStyledProvider tailwind={twCssModule}>
      <App />
    </TailwindStyledProvider>
  </React.StrictMode>
);
