import { createSlice } from "@reduxjs/toolkit";

const valids = {
  user: {
    name: true,
    lastname: true,
    email: true,
    userPhone: true,
    userRole: true,
  },
  residential: {
    owner: true,
    resident: true,
    address: true,
    residentialPhone: true,
  },
  ticket: {
    idTickets: true,
    title: true,
    userId: true,
    categoryId: true,
    priority: true,
    maintenanceId: true,
    description: true,
  },
  maintenance: {
    idMaintenance: true,
    maintenance: true,
    abilityId: true,
    ability: true,
  },
  category: {
    categoryId: true,
    category: true,
  },
};

const values = {
  user: {
    name: "",
    lastname: "",
    email: "",
    userPhone: "",
    userRole: "",
  },
  residential: {
    ownerId: "",
    residentId: "",
    address: "",
    residentialPhone: "",
  },
  maintenance: {
    userId: "",
    categoryId: "",
  },
  ticket: {
    title: "",
    description: "",
    userId: "",
    categoryId: "",
    maintenanceId: "",
  },
  category: {
    value: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState: { values, valids, actual:  '' },
  reducers: {
    setValues: (state, action) => {
      const { target, name, value } = action.payload;
      state.values[target][name] = value;
    },
    setValidations: (state, action) => {
      const { target, name, value } = action.payload;
      state.valids[target][name] = value;
    },
    setActual: (state, action) => {
      const { target, fields, id } = action.payload;
      state.values[target] = fields;
      state.actual = id;
    },
    clean: (state) => {
      state.actual = '';
    }
  },
});

export const { setValues, setValidations, setActual, clean } = formSlice.actions;
export default formSlice.reducer;
