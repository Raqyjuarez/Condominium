import Sidebar from "./components/Sidebar";
import MyRoutes from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/Theme";
import Box from "@mui/material/Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box
          component="main"
          sx={{
            display: "flex",
            alignSelf: "stretch",
            flexDirection: "row",
            gap: 4,
            bgcolor: '#EDE7F6',
            height: '100vh',            
          }}
        >
          <Sidebar />
          <MyRoutes />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
