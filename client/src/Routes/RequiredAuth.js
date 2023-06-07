import { useLocation, Navigate } from "react-router-dom";
import FullLayout from "../layouts/full/FullLayout";

const RequiredAuth = () => {
    const auth = JSON.parse(localStorage.getItem('Auth'))
    const location = useLocation()

    return (
        auth?.user
            ? <FullLayout />
            : <Navigate to='/' state={{ from: location }} replace />
    )
}

export default RequiredAuth