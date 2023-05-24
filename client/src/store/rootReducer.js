import { combineReducers } from "redux";
import { authReduer } from './auth/reducer'


const rootReducer = combineReducers({
    auth: authReduer,
})

export default rootReducer;