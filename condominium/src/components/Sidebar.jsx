import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../app/drawerSlice";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded"
import ListItemText from "@mui/material/ListItemText";
import { Box, IconButton, Typography, Button } from "@mui/material";
import Logo from "../assets/Logo.svg";

export default function Sidebar() {
  // const [drawerVisible, setDrawerVisible] = useState(true);
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

  //const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    window.location.replace("/login");
  };

  //const user = useAuth();

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
            fontSize: "22px",
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
      <Button
        type="button"
        onClick={logOut}
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
      >
        Log Out
      </Button>
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
