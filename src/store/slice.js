/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {},
  },
});

export const { addUser } = userSlice.actions;
export const selectProfile = (state) => state.user.profile;
export default userSlice.reducer;
