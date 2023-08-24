import { createSlice } from "@reduxjs/toolkit";

const valid = {
  users: {
    name: true,
    lastname: true,
    email: true,
    userPhone: true,
    userRole: true,
  },
  residentials:{
    owner: true,
    resident: true,
    address: true,
    residentialPhone:true,
  },
  tickets:{
    idTickets:true,
    title: true,
    userId: true,
    categoryId: true,
    priority: true,
    maintenanceId: true,
    description: true,
  },
  maintenance:{
    idMaintenance: true,
    maintenance: true,
    abilityId: true,
    ability: true,
  },
  categories:{
    idCategories: true,
    category: true,

  }

};

const initialInputs = {
  users: {
    id: 1,
    inputs: [
      {
        key: "name",
        name: "name",
        type: "text",
        placeholder: "Name",
        error: !valid.users.name,
        helperText:
          !valid.users.name &&
          "Name should be 3-16 characters and shouldn't include any special character!",
      },
      {
        key: "lastname",
        name: "lastname",
        type: "text",
        placeholder: "lastname",
        error: !valid.users.lastname,
        helperText:
          !valid.users.lastname &&
          "lastname should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "email",
        name: "email",
        type: "email",
        placeholder: "Email",
        error: !valid.users.email,
        helperText: !valid.users.email && "The email must be valid",
        required: true,
      },
      {
        key: "userPhone",
        name: "userPhone",
        type: "number",
        placeholder: "Phone Number",
        error: !valid.users.userPhone,
        helperText: !valid.users.userPhone && "Only use numbers",
        required: true,
      },
      {
        key: "userRole",
        name: "userRole",
        type: "text",
        placeholder: "Add User Role",
        error: !valid.users.userRole,
        helperText: !valid.users.userRole && "User Role must exist",
        required: true,
      },
    ],
  },
  residentials: {
    id: 2,
    inputs: [
      {
        key: "owner",
        name: "owner",
        type: "text",
        placeholder: "Owner",
        error: !valid.residentials.owner,
        helperText:!valid.residentials.owner &&
          "Owner should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "resident",
        name: "resident",
        type: "text",
        placeholder: "Resident",
        error: !valid.residentials.resident,
        helperText:!valid.residentials.resident &&
          "Resident should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "address",
        name: "address",
        type: "text",
        placeholder: "Address",
        error: !valid.residentials.address,
        helperText:!valid.residentials.address &&
          "Address should be 10-25 characters and shouldn't include any special character!",
        required: true,
      },

      {
        key: "residentialPhone",
        name: "residentialPhone",
        type: "number",
        placeholder: "Phone Number",
        error: !valid.residentials.residentialPhone,
        helperText: !valid.residentials.residentialPhone && "Only use numbers",
        required: true,
        onChange: "onInputChange",
      },
    ],
  },
  tickets: {
    id: 3,
    inputs: [
      {
        key: "idTickets",
        name: "idTickets",
        type: "number",
        placeholder: "ID",
        error: !valid.tickets.idTickets,
        helperText: !valid.tickets.idTickets && "Use only numbers!",
        required: true,
      },
      {
        key: "title",
        name: "title",
        type: "text",
        placeholder: "Title",
        error: !valid.tickets.title,
        helperText:!valid.tickets.title &&
          "Title should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "userId",
        name: "userId",
        type: "text",
        placeholder: "User ID",
        error: !valid.tickets.userId,
        helperText: !valid.tickets.userId &&
          "Address should be 10-25 characters and shouldn't include any special character!",
        required: true,
      },

      {
        key: "categoryId",
        name: "categoryId",
        type: "number",
        placeholder: "Category ID",
        error: !valid.tickets.categoryId,
        helperText: !valid.tickets.categoryId && "Only use numbers",
        required: true,
      },
      {
        key: "priority",
        name: "priority",
        type: "number",
        placeholder: "Priority",
        error: !valid.tickets.priority,
        helperText: !valid.tickets.priority && "Only use numbers",
        required: true,
      },
      {
        key: "maintenanceId",
        name: "maintenanceId",
        type: "number",
        placeholder: "Maintenance ID",
        error: !valid.tickets.maintenanceId,
        helperText: !valid.tickets.maintenanceId && "Only use numbers",
        required: true,
      },

      {
        key: "description",
        name: "description",
        type: "text",
        placeholder: "Description",
        error:!valid.tickets.description,
        helperText: !valid.tickets.description && "Use 250 words or more",
        required: true,
      },
    ],
  },
  maintenance: {
    id: 4,
    inputs: [
      {
        key: "idMaintenance",
        name: "idMaintenance",
        type: "number",
        placeholder: "ID",
        error: !valid.maintenance.idMaintenance,
        helperText: !valid.maintenance.idMaintenance && "Use only numbers",
        required: true,
      },
      {
        key: "maintenance",
        name: "maintenance",
        type: "text",
        placeholder: "Maintenance",
        error: !valid.maintenance.maintenance,
        helperText:!valid.maintenance.maintenance && 
          "Maintenance should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "abilityId",
        name: "abilityId",
        type: "number",
        placeholder: "Ability ID",
        error: !valid.maintenance.abilityId,
        helperText: !valid.maintenance.abilityId && "Use only numbers",
        required: true,
      },

      {
        key: "ability",
        name: "ability",
        type: "text",
        placeholder: "ability",
        error: !valid.maintenance.ability,
        helperText: !valid.maintenance.ability && "Write the Ability needed without special characters",
        required: true,
      },
    ],
  },
  categories: {
    id: 5,
    inputs: [
      {
        key: "idCategories",
        name: "idCategories",
        type: "number",
        placeholder: "ID",
        error: !valid.categories.idCategories,
        helperText: !valid.categories.idCategories && "Use only numbers",
        required: true,
      },
      {
        key: "category",
        name: "category",
        type: "text",
        placeholder: "Category",
        error: !valid.categories.category,
        helperText:!valid.categories.category && 
          "Category should be 3-10 characters and shouldn't include any special character!",
        required: true,
      },
    ],
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState: { initialInputs, valid },
  reducers: {
    setValidations: (state, action) => {
      const { page, name, value } = action.payload;
      console.log(page, name, value);
      if (page === 1) { state.valid.users[name] = value }
      else if (page === 2) {state.valid.residentials[name] = value } 
    },
  },
});

export const { setValidations } = formSlice.actions;
export default formSlice.reducer;