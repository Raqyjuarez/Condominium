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

const toggle = { type: "toggle" };
export default function Sidebar() {
  // const [drawerVisible, setDrawerVisible] = useState(true);
  const drawerWidth = {
    closed: 72,
    opened: 256,
  };

  const drawerState = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();

  const handleDrawerState = useAction(toggle);

  return (
    <Stack
      direction="column"
      p={0}
      //width={drawerVisible == false ? drawerWidth.closed : drawerWidth.opened}
    >
      <DrawerHeader>
        <IconButton color="primary" onClick={handleDrawerState}>
          <MenuRoundedIcon fontSize="large" />
        </IconButton>
        <Typography
          className="test"
          variant="h5"
          sx={{ fontWeight: 800, color: "#212121" }}
        >
          CONDOMINIUM
        </Typography>
      </DrawerHeader>
    </Stack>
  );
}

const DrawerHeader = styled("div")(({ drawerVisible }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 4,
  justifyContent: "center",
  alignItems: "center",

  ".test": {
    color: drawerVisible ? "red" : "blue",
  },
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
