import {
  Box,
  List
} from "@mui/material";
import LogoSection from "./LogoSection";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import GroupIcon from '@mui/icons-material/Group';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ConstructionIcon from '@mui/icons-material/Construction';
import CategoryIcon from '@mui/icons-material/Category';
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../app/drawerSlice";
import NavItem from "./NavItem";

const Sidebar = ({ drawerOpen, drawerToggle }) => {
  const drawerOpened = useSelector((state) => state.drawer.opened);
  const dispatch = useDispatch();
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
        display: "flex",
        flexDirection: 'column',
        alignItems: drawerOpened ? 'normal' : 'center',
        p: 2,
        minWidth: drawerOpened ? drawerWidth.opened : drawerWidth.closed,
        borderRight: '2px dashed rgba(145, 158, 171, 0.24)'
      }}
    >
      <Box sx={{ display: "flex", marginBottom: 2 }}>
        <LogoSection opened={drawerOpened} toggle={handleDrawerState} />
      </Box>
      <List disablePadding>
        {linksArray.map((item) => (
          <NavItem key={item.label} item={item}/>
          // <ListItem component={NavLink} key={label} to={to} disablePadding>
          //   <ListItemButton sx={{ minHeight: 24 }}>
          //     <ListItemIcon>{icon}</ListItemIcon>
          //     <ListItemText
          //       primary={label}
          //       sx={{ display: drawerOpened ? "block" : "none", color: "#fff" }}
          //     />
          //   </ListItemButton>
          // </ListItem>
        ))}
      </List>
    </Box>
  );
};

const linksArray = [
  {
    label: "Users",
    icon: <GroupIcon />,
    path: "/Users",
  },
  {
    label: "Residentials",
    icon: <HolidayVillageIcon />,
    path: "/Residentials",
  },
  {
    label: "Tickets",
    icon: <ReceiptIcon />,
    path: "/Tickets",
  },
  {
    label: "Maintenance",
    icon: <ConstructionIcon />,
    path: "/Maintenance",
  },
  {
    label: "Categories",
    icon: <CategoryIcon />,
    path: "/Categories",
  },
];

export default Sidebar;
