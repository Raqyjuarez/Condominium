import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../app/drawerSlice";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import Logo from "../assets/Logo.svg";

export default function Sidebar() {
  const drawerWidth = {
    closed: 72,
    opened: 256,
  };

  const drawerState = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();

  const handleDrawerState = () => {
    console.log(drawerState);
    dispatch(toggle());
  };

  return (
    <Box
      sx={{
        flexDirection: "column",
        padding: 1,
        justifyContent: "center",
        bgcolor: "#FAFAFA",
        width: drawerState ? drawerWidth.opened : drawerWidth.closed,
      }}
    >
      <DrawerHeader>
        <IconButton
          color="primary"
          edge="start"
          onClick={() => handleDrawerState()}
          sx={{ margin: 0, padding: 0 }}
        >
          <img src={Logo} style={{ height: 48, width: 48 }} />
        </IconButton>
        <Typography
          component={NavLink}
          to="/"
          className="test"
          sx={{
            fontSize: '22px',
            fontWeight: 900,
            color: "#212121",
            textDecoration: "none",
            display: drawerState ? "block" : "none",
            width: "184px",
            height: "29px",
          }}
        >
          CONDOMINIUM
        </Typography>
      </DrawerHeader>
      <List>
        {linksArray.map(({ icon, label, to }) => (
          <ListItem
            component={NavLink}
            key={label}
            to={to}
            sx={{ display: "block" }}
            disablePadding
          >
            <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={label}
                sx={{ display: drawerState ? "block" : "none" }}
              />
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
  height: 72,
  padding: 4,
  justifyContent: drawerState ? "initial" : "center",
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
