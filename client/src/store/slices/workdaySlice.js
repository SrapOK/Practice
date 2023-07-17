import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workday: {}
};

export const workdaySlice = createSlice({
  name: "workday",
  initialState,
  reducers: {
    setWorkday: (state, action) => {
      state.workday = action.payload;
    }
  }
});

export const { setWorkday } = workdaySlice.actions;

export default workdaySlice.reducer;
