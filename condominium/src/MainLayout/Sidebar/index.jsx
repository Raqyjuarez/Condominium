import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoSection from "./LogoSection";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = ({ drawerOpen, drawerToggle }) => {
  const drawerOpened = useSelector((state) => state.drawer.opened);
  const drawerWidth = {
    closed: 72,
    opened: 256,
  };
  const handleDrawerState = () => {
    dispatch(toggle());
  };

  return (
    <Box
      component="nav"
      sx={{
        display: 'block',
        p: 2,
        minWidth: 256,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <LogoSection />
      </Box>
      <List>
        {linksArray.map(({ icon, label, to }) => (
          <ListItem component={NavLink} key={label} to={to} disablePadding>
            <ListItemButton sx={{ minHeight: 24 }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={label}
                sx={{ display: drawerOpened ? "block" : "none" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

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

export default Sidebar;
