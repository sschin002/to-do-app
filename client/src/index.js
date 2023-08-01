import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./components/Button";
import Title from "./components/Title";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Button />
    <Title />
  </React.StrictMode>
);
