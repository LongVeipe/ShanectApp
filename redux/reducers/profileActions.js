import { ACTION_TYPES } from "../../constants";

export function changeAccountInfo(accountInfo){
    return{
        type: ACTION_TYPES.CHANGE_ACCOUNT_INFO,
        payload:{
            accountInfo,
        }
    }
}