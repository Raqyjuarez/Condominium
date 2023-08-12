import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "../features/states/drawerSlice";
import formSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    form: formSlice
  },
});
