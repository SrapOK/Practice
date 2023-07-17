import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendances: []
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    setAttendances: (state, action) => {
      state.attendances = action.payload;
    }
  }
});

export const { setAttendances } = attendanceSlice.actions;

export default attendanceSlice.reducer;
