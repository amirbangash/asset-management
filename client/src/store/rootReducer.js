import { combineReducers } from "redux";
import { authReduer } from './auth/reducer'
import { assetReduer } from "./asset/reducer";
import uiReducer from "./uiState/reducer";


const rootReducer = combineReducers({
    auth: authReduer,
    asset: assetReduer,
    uiState: uiReducer
})

export default rootReducer;