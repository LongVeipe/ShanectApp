import { ACTION_TYPES } from "../../constants";

export function chooseGender(gender){
    return{
        type: ACTION_TYPES.CHOOSE_GENDER,
        payload:{
            gender
        }
    }
}

export function changeFullName(fullName){
    return {
        type: ACTION_TYPES.CHANGE_FULL_NAME,
        payload:{
            fullName
        }
    }
}

export function changeUsername(username){
    return{
        type: ACTION_TYPES.CHANGE_USERNAME,
        payload:{
            username,
        }
    }
}

export function changeEmail(email){
    return{
        type: ACTION_TYPES.CHANGE_EMAIL,
        payload:{
            email,
        }
    }
}

export function changePassword(password){
    return{
        type: ACTION_TYPES.CHANGE_PASSWORD,
        payload:{
            password,
        }
    }
}
