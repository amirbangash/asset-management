import API from "./api"

//login
export const loginUser = userCredentials => {
	return API.post("user/login", userCredentials)
}

//register
export const registerUser = userData => {
	return API.post("user/register", userData)
}