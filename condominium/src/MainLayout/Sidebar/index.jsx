import { Box, List, styled } from "@mui/material";
import LogoSection from "./LogoSection";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import GroupIcon from "@mui/icons-material/Group";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ConstructionIcon from "@mui/icons-material/Construction";
import CategoryIcon from "@mui/icons-material/Category";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../app/drawerSlice";
import NavItem from "./NavItem";

const Sidebar = () => {
  const drawerOpened = useSelector((state) => state.drawer.opened);
  const role = useSelector((state) => state.actual.value.user.userRole);
  const dispatch = useDispatch();
  const drawerWidth = {
    closed: 72,
    opened: 256,
  };

  const handleDrawerState = () => {
    dispatch(toggle());
  };

  return (
    <StyledBox
      className={drawerOpened ? "opened" : "closed"}
      component="nav"
      opened={drawerOpened}
      drawer={drawerWidth}
    >
      <Box sx={{ display: "flex", marginBottom: 2 }}>
        <LogoSection opened={drawerOpened} toggle={handleDrawerState} />
      </Box>
      <List disablePadding>
        {role === "Admin" ? (
          linksArray.map((item) => <NavItem key={item.label} item={item} />)
        ) : (
          <>
          <NavItem
            key="myTickets"
            item={{
              label: "My Tickets",
              icon: <GroupIcon />,
              path: "/MyTickets",
            }}
          />
          <NavItem
            key="newTicket"
            item={{
              label: "New Tickets",
              icon: <GroupIcon />,
              path: "/Tickets/CU",
            }}
          /></>
        )}
      </List>
      {/* <Logout /> */}
    </StyledBox>
  );
};

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "opened" && prop !== "drawer",
})(({ opened, drawer }) => ({
  p: 2,
  display: "flex",
  flexDirection: "column",
  borderRight: "2px dashed rgba(145, 158, 171, 0.24)",

  "&.opened": {
    width: drawer.opened,
    minWidth: drawer.opened,
    alignItems: "normal",
    transition: "width 0.275s ease-out, min-width 0.275s ease-out",
  },

  "&.closed": {
    width: drawer.closed,
    minWidth: drawer.closed,
    alignItems: "center",
    transition: "width 0.175s linear, min-width 0.175s linear",
  },
}));

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
    label: "Maintenances",
    icon: <ConstructionIcon />,
    path: "/Maintenances",
  },
  {
    label: "Categories",
    icon: <CategoryIcon />,
    path: "/Categorys",
  },
];

export default Sidebar;
