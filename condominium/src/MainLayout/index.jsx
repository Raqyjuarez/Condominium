import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../app/drawerSlice";


const Main = styled("main")({
  width: "100%",
  backgroundColor: "#EDE7F6",
  padding: 16,
  flexGrow: 1,
});

const MainLayout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Main theme={theme}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
