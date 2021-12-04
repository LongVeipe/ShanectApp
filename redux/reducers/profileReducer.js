import { ACTION_TYPES } from "../../constants";

let defaultState={
    accountInfo: null,
}

let profileReducer = (state = defaultState, action) => {
    switch(action.type)
    {
        case ACTION_TYPES.CHANGE_ACCOUNT_INFO:
            return{
                ...state,
                accountInfo: action.payload.accountInfo,
            }
        default:
            return state;
    }
}

export default profileReducer;