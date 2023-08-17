import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/Theme";
import Routes from './routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
