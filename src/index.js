import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { persistor, store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as JotaiProvider } from "jotai";
import { PersistGate } from "redux-persist/integration/react";
import { CounterProvider } from "./context/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <JotaiProvider>
          <CounterProvider>
            <App />
          </CounterProvider>
        </JotaiProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
