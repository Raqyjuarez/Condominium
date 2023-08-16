import { createSlice } from "@reduxjs/toolkit";

const valid = {
  users: {
    Name: true,
    Lastname: true,
    Email: true,
    UserPhone: true,
    UserRole: true,
  },

  residentials:{
    Owner: true,
    Resident: true,
    Address: true,
    ResidentialPhone:true,
  },
  tickets:{
    IdTickets:true,
    Title: true,
    UserId: true,
    CategoryId: true,
    Priority: true,
    MaintenanceId: true,
    Description: true,
  },
  maintenance:{
    IdMaintenance: true,
    Maintenance: true,
    AbilityId: true,
    Ability: true,
  },
  categories:{
    IdCategories: true,
    Category: true,

  }

};

const initialInputs = {
  users: {
    id: 1,
    inputs: [
      {
        key: "Name",
        name: "Name",
        type: "text",
        placeholder: "Name",
        error: !valid.users.Name,
        helperText:
          !valid.users.Name &&
          "Name should be 3-16 characters and shouldn't include any special character!",
      },
      {
        key: "Lastname",
        name: "Lastname",
        type: "text",
        placeholder: "Lastname",
        error: !valid.users.Lastname,
        helperText:
          !valid.users.Lastname &&
          "Lastname should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "Email",
        name: "Email",
        type: "email",
        placeholder: "Email",
        error: !valid.users.Email,
        helperText: !valid.users.Email && "The email must be valid",
        required: true,
      },
      {
        key: "UserPhone",
        name: "UserPhone",
        type: "number",
        placeholder: "Phone Number",
        error: !valid.users.UserPhone,
        helperText: !valid.users.UserPhone && "Only use numbers",
        required: true,
      },
      {
        key: "UserRole",
        name: "UserRole",
        type: "text",
        placeholder: "Add User Role",
        error: !valid.users.UserRole,
        helperText: !valid.users.UserRole && "User Role must exist",
        required: true,
      },
    ],
  },
  residentials: {
    id: 2,
    inputs: [
      {
        key: "Owner",
        name: "Owner",
        type: "text",
        placeholder: "Owner",
        error: !valid.residentials.Owner,
        helperText:!valid.residentials.Owner &&
          "Owner should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "Resident",
        name: "Resident",
        type: "text",
        placeholder: "Resident",
        error: !valid.residentials.Resident,
        helperText:!valid.residentials.Resident &&
          "Resident should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "Address",
        name: "Address",
        type: "text",
        placeholder: "Address",
        error: !valid.residentials.Address,
        helperText:!valid.residentials.Address &&
          "Address should be 10-25 characters and shouldn't include any special character!",
        required: true,
      },

      {
        key: "ResidentialPhone",
        name: "ResidentialPhone",
        type: "number",
        placeholder: "Phone Number",
        error: !valid.residentials.ResidentialPhone,
        helperText: !valid.residentials.ResidentialPhone && "Only use numbers",
        required: true,
        onChange: "onInputChange",
      },
    ],
  },
  tickets: {
    id: 3,
    inputs: [
      {
        key: "IdTickets",
        name: "IdTickets",
        type: "number",
        placeholder: "ID",
        error: !valid.tickets.IdTickets,
        helperText: !valid.tickets.IdTickets && "Use only numbers!",
        required: true,
      },
      {
        key: "Title",
        name: "Title",
        type: "text",
        placeholder: "Title",
        error: !valid.tickets.Title,
        helperText:!valid.tickets.Title &&
          "Title should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "UserId",
        name: "UserId",
        type: "text",
        placeholder: "User ID",
        error: !valid.tickets.UserId,
        helperText: !valid.tickets.UserId &&
          "Address should be 10-25 characters and shouldn't include any special character!",
        required: true,
      },

      {
        key: "CategoryId",
        name: "CategoryId",
        type: "number",
        placeholder: "Category ID",
        error: !valid.tickets.CategoryId,
        helperText: !valid.tickets.CategoryId && "Only use numbers",
        required: true,
      },
      {
        key: "Priority",
        name: "Priority",
        type: "number",
        placeholder: "Priority",
        error: !valid.tickets.Priority,
        helperText: !valid.tickets.Priority && "Only use numbers",
        required: true,
      },
      {
        key: "MaintenanceId",
        name: "MaintenanceId",
        type: "number",
        placeholder: "Maintenance ID",
        error: !valid.tickets.MaintenanceId,
        helperText: !valid.tickets.MaintenanceId && "Only use numbers",
        required: true,
      },

      {
        key: "Description",
        name: "Description",
        type: "text",
        placeholder: "Description",
        error:!valid.tickets.Description,
        helperText: !valid.tickets.Description && "Use 250 words or more",
        required: true,
      },
    ],
  },
  maintenance: {
    id: 4,
    inputs: [
      {
        key: "IdMaintenance",
        name: "IdMaintenance",
        type: "number",
        placeholder: "ID",
        error: !valid.maintenance.IdMaintenance,
        helperText: !valid.maintenance.IdMaintenance && "Use only numbers",
        required: true,
      },
      {
        key: "Maintenance",
        name: "Maintenance",
        type: "text",
        placeholder: "Maintenance",
        error: !valid.maintenance.Maintenance,
        helperText:!valid.maintenance.Maintenance && 
          "Maintenance should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "AbilityId",
        name: "AbilityId",
        type: "number",
        placeholder: "Ability ID",
        error: !valid.maintenance.AbilityId,
        helperText: !valid.maintenance.AbilityId && "Use only numbers",
        required: true,
      },

      {
        key: "Ability",
        name: "Ability",
        type: "text",
        placeholder: "Ability",
        error: !valid.maintenance.Ability,
        helperText: !valid.maintenance.Ability && "Write the Ability needed without special characters",
        required: true,
      },
    ],
  },
  categories: {
    id: 5,
    inputs: [
      {
        key: "IdCategories",
        name: "IdCategories",
        type: "number",
        placeholder: "ID",
        error: !valid.categories.IdCategories,
        helperText: !valid.categories.IdCategories && "Use only numbers",
        required: true,
      },
      {
        key: "Category",
        name: "Category",
        type: "text",
        placeholder: "Category",
        error: !valid.categories.Category,
        helperText:!valid.categories.Category && 
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