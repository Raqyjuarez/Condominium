import { ListItemText, ListItemIcon, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const NavItem = ({ item }) => {
  const drawerOpened = useSelector((state) => state.drawer.opened);
  const { icon, label, path } = item;
  return (
    <StyledNavItem
      component={NavLink}
      to={path}
      className={({ isActive }) => (isActive ? "active" : "")}
      sx={{
        "&.active": {
          color: "#5E35B1",
          bgcolor: "rgba(94,53,177,0.08)",
          fontWeight: 800,
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontSize: 14,
          fontWeight: 600,
          color: "inherit",
        }}
        sx={{
          display: drawerOpened ? "block" : "none",
        }}
      />
    </StyledNavItem>
  );
};

const StyledNavItem = styled((props) => (
  <ListItemButton disableGutters {...props} />
))({
  fontSize: 14,
  lineHeight: 22 / 14,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: "#637381",
  borderRadius: 8,
  padding: "4 8 4 12",
  marginBottom: 8,
});

const StyledNavItemIcon = styled(ListItemIcon)({
  width: 24,
  height: 24,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default NavItem;
