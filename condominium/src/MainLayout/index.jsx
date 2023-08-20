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
  //#region breakpoints
  // [theme.breakpoints.up("md")]: {
  //   marginLeft: open ? 0 : -(drawerWidth - 20),
  //   width: `calc(100% - ${drawerWidth}px)`,
  // },
  // [theme.breakpoints.down("md")]: {
  //   marginLeft: "20px",
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   padding: "16px",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   marginLeft: "10px",
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   padding: "16px",
  //   marginRight: "10px",
  // },
  //#endregion
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
