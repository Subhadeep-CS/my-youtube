import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleSideBarMenu: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleSideBarMenu } = globalSlice.actions;
export default globalSlice.reducer;
