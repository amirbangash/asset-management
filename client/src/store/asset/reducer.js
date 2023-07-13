import * as types from "./types"

const initialState = {
    assetData: [],
    Products: []
}

export const assetReduer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ASSETS: {
            return {
                ...state,
                assetData: action.payload
            }
        }
        case types.GET_ASSETS: {
            return {
                ...state,
                Products: action.payload
            }
        }
        default:
            return state
    }
}