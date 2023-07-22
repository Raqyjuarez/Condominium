import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box'
import { useState } from "react";
import { Typography } from "@mui/material";

export default function Sidebar() {
  const [drawerState, setDrawerState] = useState(false);
  const drawerWidth = {
    closed: 72,
    opened: 256,
  };

  const handleDrawerState = () => {
    setDrawerState(!drawerState);
  };

  return (
    <Stack
      direction="column"
      width={drawerState == false ? drawerWidth.closed : drawerWidth.opened}
    >
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <IconButton color="primary" onClick={() => handleDrawerState()}>
        <MenuRoundedIcon fontSize='large'/>
      </IconButton>
      <Typography variant="h5" sx={{ fontWeight: 800, color: '#212121' }}>
        CONDOMINIUM
      </Typography>

        </Box>
      
    </Stack>
  );
}
