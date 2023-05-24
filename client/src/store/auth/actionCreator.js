import * as types from "./types"

export const userAction = payload => ({
    type: types.USER_DATA,
    payload,
})

export const updateUserAction = payload => ({
    type: types.UPDATE_USER,
    payload,
})
