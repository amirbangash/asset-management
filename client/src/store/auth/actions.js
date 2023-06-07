import { registerUser, loginUser, userUpdate } from "../../services/auth"
import { errorToast, successToast } from "../../utilities/toastify"
import { updateUserAction, userAction } from "./actionCreator"

function showToast(data) {
    return data?.Error?.map(el => {
        return errorToast(el)
    })
}

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
        showToast(data)
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

// User Update
export const updatingUser = userUpdateData => async dispatch => {
    try {
        const res = await userUpdate(userUpdateData)
        const { data } = res
        dispatch(updateUserAction(data))
        successToast(data?.msg)
        return res
    } catch (err) {
        const { data, status } = err?.response
        showToast(data)
    }
}

//main user logout
export const logoutUser = () => dispatch => {
    dispatch(userAction({}))
    localStorage.removeItem("Auth");
    successToast('User Logout')
}