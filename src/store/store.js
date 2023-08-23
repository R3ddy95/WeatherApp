// store.js

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Assicurati di avere un file reducers.js corretto

const store = configureStore({
  reducer: rootReducer,
  // Altri opzioni o middleware possono essere aggiunti qui
});

export default store;
