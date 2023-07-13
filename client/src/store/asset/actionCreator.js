import * as types from "./types"

export const assetAction = payload => ({
    type: types.ADD_ASSETS,
    payload,
})

export const getAssetAction = payload => ({
    type: types.GET_ASSETS,
    payload
})