import { createSlice } from "@reduxjs/toolkit";

const valids = {
  user: {
    username: true,
    password: true,
    name: true,
    lastname: true,
    email: true,
    userPhone: true,
    userRole: true,
  },
  residential: {
    ownerId: true,
    residentId: true,
    address: true,
    residentialPhone: true,
  },
  ticket: {
    title: true,
    description: true,
    userId: true,
    categoryId: true,
    maintenanceId: true,
    status: true,
  },
  maintenance: {
    userId: true,
    categoryId: true,
  },
  category: {
    value: true,
  },
};

const values = {
  user: {
    username: '',
    password: '',
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
      // console.log(target, fields, id);
      state.values[target] = fields;
      state.actual = id;
    },
    clean: (state) => {
      state.values = values;
      state.actual = '';
    }
  },
});

export const { setValues, setValidations, setActual, clean } = formSlice.actions;
export default formSlice.reducer;
