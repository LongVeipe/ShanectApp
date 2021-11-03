import {ACTION_TYPES, DEFINES} from '../../constants';
import {Value} from 'react-native-reanimated'

let defaultState = {
  isPullUpBackground: false,
  loginType: "shanect",
  isRememberPassword: false,
  buttonOpacity: new Value(1),
  loginResponse: null,
  username: "",
  password: "",
};

let loginReducer = (state = defaultState, action) => {
  let newState = {...state};
  switch (action.type) {
    case ACTION_TYPES.LOGIN_BY_SHANECT:
      newState={
        ...state,
        loginResponse: action.loginResponse,
      }
      break;
    case ACTION_TYPES.LOGIN_BY_FACEBOOK:
      break;
    case ACTION_TYPES.LOGIN_BY_GOOGLE:
      break;
    case ACTION_TYPES.CHOOSE_LOGIN_TYPE:
      newState={
        ...state,
        loginType: action.loginType,
        buttonOpacity: action.buttonOpacity,
      }
      break;
    case ACTION_TYPES.REMEMBER_PASSWORD:
      newState = {
        ...state,
        isRememberPassword: !state.isRememberPassword,
      }
      break;
    case ACTION_TYPES.CLOSE_LOGIN_FORM:
      newState = {
        ...state,
        buttonOpacity: action.buttonOpacity,
      }
      break;
    case ACTION_TYPES.CHANGE_USERNAME:
      return{
        ...state,
        username: action.payload.username
      }
    case ACTION_TYPES.CHANGE_PASSWORD:
      return{
        ...state,
        password: action.payload.password,
      }
    default:
      break;
  }

  return newState;
};

export default loginReducer