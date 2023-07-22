import { createTheme } from "@mui/material/styles";
import { grey, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: deepPurple[600],
    },
  },
  typography: {
    allVariants: {
        color: grey[900]
    }
  }
});
