import { createSlice } from "@reduxjs/toolkit";

const valid = {
  users: {
    Name: true,
    Lastname: true,
    Email: true,
    UserPhone: true,
    UserRole: true,
  },
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
        type: "text",
        placeholder: "Owner",
        errorMessage:
          "Owner should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "Resident",
        type: "text",
        placeholder: "Resident",
        errorMessage:
          "Resident should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "Address",
        type: "text",
        placeholder: "Address",
        errorMessage:
          "Address should be 10-25 characters and shouldn't include any special character!",
        required: true,
      },

      {
        key: "ResidentialPhone",
        type: "number",
        placeholder: "Phone Number",
        errorMessage: "Only use numbers",
        required: true,
        onChange: "onInputChange",
      },
    ],
  },
  tickets: {
    id: 3,
    inputs: [
      {
        key: "ID",
        type: "number",
        placeholder: "ID",
        errorMessage: "Use only numbers!",
        required: true,
      },
      {
        key: "Title",
        type: "text",
        placeholder: "Title",
        errorMessage:
          "Title should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "User ID",
        type: "text",
        placeholder: "User ID",
        errorMessage:
          "Address should be 10-25 characters and shouldn't include any special character!",
        required: true,
      },

      {
        key: "Category ID",
        type: "number",
        placeholder: "Category ID",
        errorMessage: "Only use numbers",
        required: true,
      },
      {
        key: "Priority",
        type: "number",
        placeholder: "Priority",
        errorMessage: "Only use numbers",
        required: true,
      },
      {
        key: "Maitenance ID",
        type: "number",
        placeholder: "Maitenance ID",
        errorMessage: "Only use numbers",
        required: true,
      },

      {
        key: "Description",
        type: "text",
        placeholder: "Description",
        errorMessage: "Use 250 words or more",
        required: true,
      },
    ],
  },
  maintenance: {
    id: 4,
    inputs: [
      {
        key: "ID",
        type: "number",
        placeholder: "ID",
        errorMessage: "Use only numbers",
        required: true,
      },
      {
        key: "Maitenance",
        type: "text",
        placeholder: "Meitenance",
        errorMessage:
          "Meitenance should be 3-16 characters and shouldn't include any special character!",
        required: true,
      },
      {
        key: "Ability ID",
        type: "number",
        placeholder: "Ability ID",
        errorMessage: "Use only numbers",
        required: true,
      },

      {
        key: "Ability",
        type: "text",
        placeholder: "Ability",
        errorMessage: "Write the Ability needed without special characters",
        required: true,
      },
    ],
  },
  categories: {
    id: 5,
    inputs: [
      {
        key: "ID",
        type: "number",
        placeholder: "ID",
        errorMessage: "Use only numbers",
        required: true,
      },
      {
        key: "Category",
        type: "text",
        placeholder: "Category",
        errorMessage:
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