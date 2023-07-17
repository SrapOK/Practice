import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import staffSlice from "./slices/staffSlice";
import attendanceSlice from "./slices/attendanceSlice";
import workdaySlice from "./slices/workdaySlice";

export const store = configureStore({
  reducer: {
    userSlice,
    staffSlice,
    attendanceSlice,
    workdaySlice
  }
});

export default store;
