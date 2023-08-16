import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar'

const drawerWidth = 256;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    background: "#EDE7F6",
    width: "100%",
    minHeight: "100vh",
    flexGrow: 1,
    transition: open ? "margin 0.2 ease-out" : "margin 0.2 ease-in",
    [theme.breakpoints.up("md")]: {
      marginLeft: open ? 0 : -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "16px",
      marginRight: "10px",
    },
  })
);

const MainLayout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", bgcolor: "#EDE7F6" }}>
      <Sidebar />
      <Main theme={theme}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
