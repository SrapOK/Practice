import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staff: []
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStaff: (state, action) => {
      state.staff = action.payload.map((item) => {
        return { ...item };
      });
    },
    setAttendance: (state, action) => {
      const { value, id } = action.payload;
      console.log(action.payload);
      const employee = state.staff.find((item) => item.id == id);
      employee.attendance = value;
    }
  }
});

export const { setStaff, setAttendance } = staffSlice.actions;

export default staffSlice.reducer;
