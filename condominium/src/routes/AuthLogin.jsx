import { useSelector } from "react-redux"
import MainRoutes from "./MainRoutes";

const AuthLogin = () => {
    const hasAcess = useSelector(state => state.actual.allowed);
    return hasAcess ? MainRoutes : {path: '/*', element: <>Hola</>}
}

export default AuthLogin;