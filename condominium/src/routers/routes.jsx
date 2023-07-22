import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Test from "../pages/Test";
import Sidebar from "../components/Sidebar";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Test page="Pagina 1" />} />
      <Route path="/Users" element={<Test page="Users Page" />} />
      <Route path="/Residentials" element={<Test page="Residentials Page" />} />
      <Route path="/Tickets" element={<Test page="Tickets Page" />} />
      <Route path="/Maintenance" element={<Test page="Maintenance Page" />} />
      <Route path="/Categories" element={<Test page="Categories Page" />} />
    </Routes>
  );
}
