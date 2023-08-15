import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "../App";
import Form from "../pages/Form";
import Forms from "../pages/Forms";
//import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import EnhancedTable from "../pages/EnhancedTable";
import { useSelector } from 'react-redux'

export default function MyRoutes() {
  const Inputs = useSelector((state) => state.form.initialInputs)


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Users" element={<Forms />} />
      <Route
        path="/Residentials"
        element={<Form data={Inputs.residentials} />}
      />
      <Route path="/Tickets" element={<Form data={Inputs.tickets} />} />
      <Route
        path="/Maintenance"
        element={<Form data={Inputs.maintenance} />}
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