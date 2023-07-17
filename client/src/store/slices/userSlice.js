import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state) => {
      state.isAuth = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logOut: (state) => {
      state.user = {};
      state.isAuth = false;
    }
  }
});

export const { setIsAuth, setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
