import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "../App";
import Form from "../pages/Form";
import Forms from "../pages/Forms";
//import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import EnhancedTable from "../pages/EnhancedTable";
import MainLayout from "../MainLayout";
import { useSelector } from "react-redux";

export default function MyRoutes() {
  const Inputs = useSelector((state) => state.form.initialInputs);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Users" element={<Forms formId={1}/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/Residentials"
        element={<Forms formId={2}/>}
      />
      <Route path="/Tickets" element={<Forms formId={3}/>}/>
      <Route path="/Maintenance" element={<Forms formId={4} />} />
      <Route
        path="/Categories"
        //element={<Forms formId={5} />} 
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
