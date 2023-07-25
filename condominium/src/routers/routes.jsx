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
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      required: true,
    },
  ],
  residentials: [
    { id: 1, name: "residentials1" },
    { id: 2, name: "residentials2" },
  ],
  tickets: [
    { id: 1, name: "tickets1" },
    { id: 2, name: "tickets2" },
  ],
  maintenance: [
    { id: 1, name: "maintenance1" },
    { id: 2, name: "maintenance2" },
  ],
  categories: [
    { id: 1, name: "categories1" },
    { id: 2, name: "categories2" },
  ],
};
