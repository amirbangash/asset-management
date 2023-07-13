import API from "./api"

//Create Assets
export const addAsset = assetDetail => {
    return API.post("asset/create-asset", assetDetail)
}

//Create Assets
export const getAssets = () => {
    return API.get("asset/get-asset-by-status/:inuse")
}

