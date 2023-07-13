import * as types from "./types"

const initialState = {
	userData: {},
}

export const authReduer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_USER: {
			return {
				...state,
				userData: {
					...state.userData,
					user: {
						...action.payload,
					},
				},
			}
		}
		case types.USER_DATA: {
			return {
				...state,
				userData: action.payload,
			}
		}
		default:
			return state
	}
}