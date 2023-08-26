import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./drawerSlice";
import formSlice from "./formSlice";
import userSlice from "./userSlice";
import residentialSlice from "./residentialSlice";
import maintenanceSlice from "./maintenanceSlice";
import ticketSlice from "./ticketSlice";
import categorySlice from "./categorySlice";
import actualSlice from "./actualSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    form: formSlice,
    actual: actualSlice,

    user: userSlice,
    residential: residentialSlice,
    maintenance: maintenanceSlice,
    ticket: ticketSlice,
    category: categorySlice,

  },
});
