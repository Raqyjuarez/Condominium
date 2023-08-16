import { Box, Drawer } from "@mui/material";
import LogoSection from "./LogoSection";

const Sidebar = ({ drawerOpen, drawerToggle }) => {
  const drawer = (
    <>
      <Box sx={{ display: "flex", p: 2 }}>
        <LogoSection />
      </Box>
    </>
  );

  return (
    <Box component="nav" sx={{ width: 256 }}>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{ width: 256, borderRight: "none" }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
