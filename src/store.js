import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Features/Auth/reducer";

const store = configureStore({
  reducer: {
    Auth,
  },
});

export default store;
