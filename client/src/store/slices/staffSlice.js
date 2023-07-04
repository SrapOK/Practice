import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staff: [
    {
      name: "Биба",
      middlename: "Бибович",
      surname: "Бибов",
      id: "1"
    },
    {
      name: "Боба",
      middlename: "Бобович",
      surname: "Бобов",
      id: "2"
    }
  ]
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    fetchStaff: () => {}
  }
});

export const { fetchStaff } = staffSlice.actions;

export default staffSlice.reducer;
