import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "../App";
import Form from "../pages/Form/Form";
//import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import EnhancedTable from "../pages/EnhancedTable";
import getFields from "../pages/Form/getFields";
import { useSelector } from 'react-redux'

export default function MyRoutes() {
  const Inputs = useSelector((state) => state.form)


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Users" element={<Form page={Inputs.users} />} />
      <Route
        path="/Residentials"
        element={<Form page={Inputs.residentials} />}
      />
      <Route path="/Tickets" element={<Form page={Inputs.tickets} />} />
      <Route
        path="/Maintenance"
        element={<Form page={Inputs.maintenance} />}
      />
      <Route
        path="/Categories"
        element={<EnhancedTable Unit={tables.categories} />}
      />
    </Routes>
  );
}

const tables = {
  categories: {
    name: "Categories",
    fields: [
      { id: "id", headerName: "ID" },
      { id: "category", headerName: "Category" },
    ],
  },
};