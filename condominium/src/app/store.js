import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./drawerSlice";
import formSlice from "./formSlice";
import userSlice from "./userSlice";
import residentialSlice from "./residentialSlice";
import maintenanceSlice from "./maintenanceSlice";
import ticketSlice from "./ticketSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    form: formSlice,

    user: userSlice,
    residential: residentialSlice,
    maintenance: maintenanceSlice,
    ticket: ticketSlice,
    category: categorySlice,

  },
});
