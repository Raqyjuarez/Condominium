import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Form from "../pages/Form";
import Sidebar from "../components/Sidebar";
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
      name: "Name",
      type: "number",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "Lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "Lastname should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "The email must be valid",
      required: true,
    },
    {
      name: "Phone",
      type: "number",
      placeholder: "Phone Number",
      errorMessage:
        "Only use numbers",
      required: true,
    },
    {
      name: "User Role",
      type: "text",
      placeholder: "Add User Role",
      errorMessage: "User Role must exist",
      required: true,
    },
  ],
  residentials: [
    {
      name: "Owner",
      type: "text",
      placeholder: "Owner",
      errorMessage:
        "Owner should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "Resident",
      type: "text",
      placeholder: "Resident",
      errorMessage: "Resident should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "Address",
      type: "text",
      placeholder: "Address",
      errorMessage: "Address should be 10-25 characters and shouldn't include any special character!",
      required: true,
    },

    {
      name: "Phone",
      type: "number",
      placeholder: "Phone Number",
      errorMessage:
        "Only use numbers",
      required: true,
    },
  ],
  tickets: [
    {
      name: "ID",
      type: "number",
      placeholder: "ID",
      errorMessage:
        "Use only numbers!",
      required: true,
    },
    {
      name: "Title",
      type: "text",
      placeholder: "Title",
      errorMessage: "Title should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "User ID",
      type: "text",
      placeholder: "User ID",
      errorMessage: "Address should be 10-25 characters and shouldn't include any special character!",
      required: true,
    },

    {
      name: "Category ID",
      type: "number",
      placeholder: "Category ID",
      errorMessage:
        "Only use numbers",
      required: true,
    },
    {
      name: "Priority",
      type: "number",
      placeholder: "Priority",
      errorMessage:
        "Only use numbers",
      required: true,
    },
    {
      name: "Maitenance ID",
      type: "number",
      placeholder: "Maitenance ID",
      errorMessage:
        "Only use numbers",
      required: true,
    },

    {
      name: "Description",
      type: "text",
      placeholder: "Description",
      errorMessage:
        "Use 250 words or more",
      required: true,
    },

  ],
  maintenance: [
    {
      name: "ID",
      type: "number",
      placeholder: "ID",
      errorMessage:
        "Use only numbers",
      required: true,
    },
    {
      name: "Maitenance",
      type: "text",
      placeholder: "Meitenance",
      errorMessage: "Meitenance should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "Ability ID",
      type: "number",
      placeholder: "Ability ID",
      errorMessage: "Use only numbers",
      required: true,
    },

    {
      name: "Ability",
      type: "text",
      placeholder: "Ability",
      errorMessage:
        "Write the Ability needed without special characters",
      required: true,
    },
  ],
  categories: [
    {
      name: "ID",
      type: "number",
      placeholder: "ID",
      errorMessage:
        "Use only numbers",
      required: true,
    },
    {
      name: "Category",
      type: "text",
      placeholder: "Category",
      errorMessage: "Category should be 3-10 characters and shouldn't include any special character!",
      required: true,
    },
  ],
};
