import { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import MyRoutes from "./routers/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Sidebar />
          <MyRoutes />
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
