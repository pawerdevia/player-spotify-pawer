import { useSelector } from "react-redux"
import { Navigate, Outlet } from 'react-router-dom'
import HeaderMusic from "../components/shared/HeaderMusic"

const ProtectedRoutes = () => {

    const credentials = useSelector(store => store.credentials)

    if (credentials !== null) {
        return (
            <>
                <HeaderMusic />
                <Outlet />
            </>
        )



    } else {
        return <Navigate to='/auth/login' />
    }
}

export default ProtectedRoutes