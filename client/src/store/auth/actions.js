import { registerUser, loginUser } from "../../services/auth"
import { userAction } from "./actionCreator"


//user register
export const register = userData => async dispatch => {
    try {
        const res = await registerUser(userData)
        dispatch(userAction(res))
        return res
    } catch (err) {
        return err
    }
}

//user login
export const login = userData => async dispatch => {
    console.log("🚀 ~ file: actions.js:18 ~ loginUser ~ userData:", userData)
    try {
        const res = await loginUser(userData)
        dispatch(userAction(res))
        return res
    } catch (err) {
        return err
    }
}

//main user logout
export const logoutUser = () => dispatch => {
	setTimeout(() => {
		dispatch(userAction({}))
        localStorage.removeItem("Auth");
	}, 300)
}