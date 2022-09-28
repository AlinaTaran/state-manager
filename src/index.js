import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as JotaiProvider } from "jotai";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <JotaiProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </JotaiProvider>
  </ReduxProvider>
);
