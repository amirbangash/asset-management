import * as types from './types'

const initialState = {
    isDialogOpen: false
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_DIALOG:
            return {
                isDialogOpen: action.payload
            }
        default:
            return state;
    }
};

export default uiReducer;
