import Sidebar from "./components/Sidebar";
import MyRoutes from "./routes/routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/Theme";
import Routes from './routes'
import Box from "@mui/material/Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          display: "flex",
          alignSelf: "stretch",
          flexDirection: "row",
          gap: 4,
          bgcolor: "#EDE7F6",
          height: "100vh",
        }}
      >
        <Sidebar />
        <MyRoutes />
      </Box>
      {/* <Routes /> */}
    </ThemeProvider>
  );
}

export default App;
