import { useSelector } from "react-redux"
import MainRoutes from "./MainRoutes";
import Login from '../pages/Login'

const AuthLogin = () => {
    const hasAcess = useSelector(state => state.actual.allowed);
    return hasAcess ? MainRoutes : {path: '/*', element: <Login/>}
}

export default AuthLogin;