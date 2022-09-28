import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "counter",
  storage,
};

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
  },
});

export const persistor = persistStore(store);
