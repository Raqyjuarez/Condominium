import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useAction } from "../hooks/useAction";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from '../features/states/drawerSlice'
import { NavLink } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Sidebar() {
  // const [drawerVisible, setDrawerVisible] = useState(true);
  const drawerWidth = {
    closed: 72,
    opened: 256,
  };

  const drawerState = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();

  const handleDrawerState = () => {
    console.log(drawerState)
    dispatch(toggle());
  }

  return (
    <Box
      sx={{flexDirection: 'column', padding: 0, justifyContent: 'center', width: drawerState ? drawerWidth.opened : drawerWidth.closed }}
      //width={drawerVisible == false ? drawerWidth.closed : drawerWidth.opened}
    >
      <DrawerHeader>
        <IconButton color="primary" edge="start" onClick={() => handleDrawerState()} sx={{margin: 0}}>
          <MenuRoundedIcon fontSize="large" />
        </IconButton>
        <Typography
          className="test"
          variant="h5"
          sx={{ fontWeight: 800, color: "#212121", display: drawerState ? 'block' : 'none' }}
        >
          CONDOMINIUM
        </Typography>
      </DrawerHeader>
      <List>
        {linksArray.map(({icon, label, to}) => (
          <ListItem component={NavLink} key={label} to={to} sx={{display: 'block' }} disablePadding>
            <ListItemButton sx={{minHeight: 48, px: 2.5}}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={label} sx={{ display : drawerState ? 'block' : 'none'}}/>
            </ListItemButton>

          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const DrawerHeader = styled("div")(({ drawerState }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 4,
  justifyContent: drawerState ? 'initial' : 'center',
  alignItems: "center",
}));

const linksArray = [
  {
    label: "Users",
    icon: <AbcRoundedIcon />,
    to: "/Users",
  },
  {
    label: "Residentials",
    icon: <AbcRoundedIcon />,
    to: "/Residentials",
  },
  {
    label: "Tickets",
    icon: <AbcRoundedIcon />,
    to: "/Tickets",
  },
  {
    label: "Maintenance",
    icon: <AbcRoundedIcon />,
    to: "/Maintenance",
  },
  {
    label: "Categories",
    icon: <AbcRoundedIcon />,
    to: "/Categories",
  },
];
