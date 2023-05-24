import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequiredAuth = () => {
    const auth = JSON.parse(localStorage.getItem('Auth'))
    const location = useLocation()

    return (
        auth?.user
            ? <Outlet />
            : <Navigate to='/' state={{ from: location }} replace />
    )
}

export default RequiredAuth