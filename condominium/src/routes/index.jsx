import { useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";
import AuthLogin from "./AuthLogin";

export default function ThemeRoutes() {
  return useRoutes([AuthRoutes, AuthLogin()]);
}
