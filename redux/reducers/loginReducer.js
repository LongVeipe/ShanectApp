import {ACTION_TYPES} from '../../constants';

let defaultState = {
  isPullUpBackground: false,
  loginFormType: "shanect",
  isRememberPassword: false,
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