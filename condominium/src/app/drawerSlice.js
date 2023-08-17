import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: { opened: true },
  reducers: {
    toggle: (state) => {
      state.opened = !state.opened;
    },
  },
});

export const { toggle } = drawerSlice.actions;
export default drawerSlice.reducer;
