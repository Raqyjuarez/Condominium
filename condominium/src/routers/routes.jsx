import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Test from "../pages/Test";
import Sidebar from "../components/Sidebar";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Test page="Pagina 1" />} />
      <Route path="/Page2" element={<Test page="Pagina 2" />} />
    </Routes>
  );
}
