import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "../App";
import Form from "../pages/Form";
//import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Users" element={<Form page={allInputs.users} />} />
      <Route
        path="/Residentials"
        element={<Form page={allInputs.residentials} />}
      />
      <Route path="/Tickets" element={<Form page={allInputs.tickets} />} />
      <Route
        path="/Maintenance"
        element={<Form page={allInputs.maintenance} />}
      />
      <Route
        path="/Categories"
        element={<Form page={allInputs.categories} />}
      />
    </Routes>
  );
}

const allInputs = {
  users: [
    {
      key: "Name",
      type: "text",
      placeholder: "Name",
      error: true,
      helperText:
        "Name should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      key: "Lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "Lastname should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      key: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "The email must be valid",
      required: true,
    },
    {
      key: "Phone",
      type: "number",
      placeholder: "Phone Number",
      errorMessage:
        "Only use numbers",
      required: true,
    },
    {
      key: "User Role",
      type: "text",
      placeholder: "Add User Role",
      errorMessage: "User Role must exist",
      required: true,
    },
  ],
  residentials: [
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
      errorMessage: "Resident should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      key: "Address",
      type: "text",
      placeholder: "Address",
      errorMessage: "Address should be 10-25 characters and shouldn't include any special character!",
      required: true,
    },

    {
      key: "Phone",
      type: "number",
      placeholder: "Phone Number",
      errorMessage:
        "Only use numbers",
      required: true,
      onChange: 'onInputChange'
    },
  ],
  tickets: [
    {
      key: "ID",
      type: "number",
      placeholder: "ID",
      errorMessage:
        "Use only numbers!",
      required: true,
    },
    {
      key: "Title",
      type: "text",
      placeholder: "Title",
      errorMessage: "Title should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      key: "User ID",
      type: "text",
      placeholder: "User ID",
      errorMessage: "Address should be 10-25 characters and shouldn't include any special character!",
      required: true,
    },

    {
      key: "Category ID",
      type: "number",
      placeholder: "Category ID",
      errorMessage:
        "Only use numbers",
      required: true,
    },
    {
      key: "Priority",
      type: "number",
      placeholder: "Priority",
      errorMessage:
        "Only use numbers",
      required: true,
    },
    {
      key: "Maitenance ID",
      type: "number",
      placeholder: "Maitenance ID",
      errorMessage:
        "Only use numbers",
      required: true,
    },

    {
      key: "Description",
      type: "text",
      placeholder: "Description",
      errorMessage:
        "Use 250 words or more",
      required: true,
    },

  ],
  maintenance: [
    {
      key: "ID",
      type: "number",
      placeholder: "ID",
      errorMessage:
        "Use only numbers",
      required: true,
    },
    {
      key: "Maitenance",
      type: "text",
      placeholder: "Meitenance",
      errorMessage: "Meitenance should be 3-16 characters and shouldn't include any special character!",
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
      errorMessage:
        "Write the Ability needed without special characters",
      required: true,
    },
  ],
  categories: [
    {
      key: "ID",
      type: "number",
      placeholder: "ID",
      errorMessage:
        "Use only numbers",
      required: true,
    },
    {
      key: "Category",
      type: "text",
      placeholder: "Category",
      errorMessage: "Category should be 3-10 characters and shouldn't include any special character!",
      required: true,
    },
  ],
};
