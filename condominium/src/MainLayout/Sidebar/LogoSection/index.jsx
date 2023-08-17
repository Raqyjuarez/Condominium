import { Box, IconButton, Typography } from "@mui/material";
import Logo from "../../../assets/Logo.svg";

const LogoSection = () => {
  return (
    <Box>
      <IconButton>
        <img src={Logo} style={{ height: 40, width: 40 }} />
      </IconButton>
    </Box>
  );
};

export default LogoSection;