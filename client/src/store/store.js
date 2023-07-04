import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import staffSlice from "./slices/staffSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    staffSlice
  }
});

export default store;
