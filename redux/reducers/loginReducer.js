import {ACTION_TYPES, DEFINES} from '../../constants';
import {Value} from 'react-native-reanimated'

let defaultState = {
  isPullUpBackground: false,
  loginType: "shanect",
  isRememberPassword: false,
  buttonOpacity: new Value(1),
};

let loginReducer = (state = defaultState, action) => {
  let newState = {...state};
  switch (action.type) {
    case ACTION_TYPES.LOGIN_BY_SHANECT:
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
    default:
      break;
  }

  return newState;
};

export default loginReducer