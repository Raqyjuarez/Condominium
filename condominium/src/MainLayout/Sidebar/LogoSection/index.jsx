import { Box, IconButton, Typography } from "@mui/material";
import Logo from "../../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const LogoSection = ({ opened, toggle }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1}}>
      <IconButton onClick={toggle} sx={{ transform: !opened ? 'rotate(-180deg)' : '', transition: 'transform 0.275s linear' }}>
        <img src={Logo} style={{ height: 40, width: 40 }} />
      </IconButton>
      <Typography
          component={NavLink}
          to="/"
          sx={{
            fontSize: "22px",
            fontWeight: 900,
            color: "#212121",
            textDecoration: "none",
            display: opened ? "block" : "none",
            width: "184px",
            height: "29px",
          }}
        >
          CONDOMINIUM
        </Typography>
    </Box>
  );
};

export default LogoSection;