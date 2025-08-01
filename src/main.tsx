import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@picocss/pico/css/pico.violet.min.css";
//import "@picocss/pico/css/pico.lime.min.css";
//import "@picocss/pico/css/pico.jade.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
