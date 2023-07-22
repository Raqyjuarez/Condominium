import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "../features/states/drawerSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
  },
});
