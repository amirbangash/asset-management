import { registerUser, loginUser } from "../../services/auth"
import { errorToast, successToast } from "../../utilities/toastify"
import { userAction } from "./actionCreator"


//user register
export const register = userData => async dispatch => {
    try {
        const res = await registerUser(userData)
        if (res.status === 201) {
            successToast(res?.data?.msg)
            dispatch(userAction(res))
            localStorage.setItem('Auth', JSON.stringify({
                user: true,
            }))
        }
        return res
    } catch (err) {
        const { data, status } = err?.response
        if (status === 400) {
            errorToast(data?.error)
        }
        if (status === 409) {
            errorToast(data?.msg)
        }
    }
}

//user login
export const login = userData => async dispatch => {
    try {
        const res = await loginUser(userData)
        if (res?.status === 200) {
            successToast('User Login Successfully')
            dispatch(userAction(res?.data))
            localStorage.setItem('Auth', JSON.stringify({
                user: true,
                token: res?.data?.token
            }))
        }
        return res
    } catch (err) {
        const { data, status } = err?.response
        if (status === 404 || status === 401) {
            errorToast(data?.Error)
        }
    }
}

//main user logout
export const logoutUser = () => dispatch => {
    setTimeout(() => {
        dispatch(userAction({}))
        localStorage.removeItem("Auth");
    }, 300)
    successToast('User Logout')
}