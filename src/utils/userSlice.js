import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedin: false,
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedin = action.payload;
    },
    logout: (state) => {
      state.isLoggedin = false;
    },
  },
});

export const { login, logout, isLoggedin} = userSlice.actions;
export default userSlice.reducer;
