import { useLocation, Navigate } from "react-router-dom";
import BlankLayout from "../layouts/blank/BlankLayout";

const RequiredAuth = () => {
    const auth = JSON.parse(localStorage.getItem('Auth'))
    const location = useLocation()

    return (
        auth?.user
            ? <BlankLayout />
            : <Navigate to='/' state={{ from: location }} replace />
    )
}

export default RequiredAuth