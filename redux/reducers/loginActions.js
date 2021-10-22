import { ACTION_TYPES } from "../../constants";


export function rememberPassword(){
    return{
        type: ACTION_TYPES.REMEMBER_PASSWORD,

    }
}

export function closeLoginForm(buttonOpacity){
    return{
        type: ACTION_TYPES.CLOSE_LOGIN_FORM,
        payload:{
            buttonOpacity,
        }
    }
}