import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    // TODO: Add other reducers like Post Reducers.
  },
});

export default store;
