import { addAsset, getAssets } from "../../services/asset"
import { errorToast, successToast } from "../../utilities/toastify"
import { assetAction, getAssetAction } from "./actionCreator"


//get Asset Request
export const getAllAssets = () => async dispatch => {
    try {
        const res = await getAssets()
        if (res?.status === 201) {
            dispatch(getAssetAction(res.data.asset))
        }
        return res
    } catch (err) {
        errorToast('Something went wrong')
    }
}

//Create Asset Request
export const createAsset = asstData => async dispatch => {
    try {
        const res = await addAsset(asstData)
        dispatch(assetAction(asstData))
        successToast(res?.data?.msg)
        getAllAssets()
        return res
    } catch (err) {
        console.log("🚀 ~ file: action.js:15 ~ register ~ err:", err)
        if (err.response.status === 400) {
            errorToast('Asset already exist!')
        }
    }
}