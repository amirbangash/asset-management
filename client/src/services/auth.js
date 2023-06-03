import API from "./api"

//login
export const loginUser = userCredentials => {
	return API.post("user/login", userCredentials)
}

//register
export const registerUser = userData => {
	return API.post("user/signup", userData)
}

//update user
export const userUpdate = updateData => {
	return API.put("user/create-profile", updateData)
}