import {ACTION_TYPES} from '../../constants';

let defaultState = {
  gender: true,
  fullName: "",
  username: "",
  email: "",
  password: "",
};

let registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHOOSE_GENDER:
      return {
        ...state,
        gender: action.payload.gender,
      };
    case ACTION_TYPES.CHANGE_FULL_NAME:
      return{
        ...state,
        fullName: action.payload.fullName,
      }
    case ACTION_TYPES.CHANGE_USERNAME:
      return{
        ...state,
        username: action.payload.username,
      }
    case ACTION_TYPES.CHANGE_EMAIL:
      return{
        ...state,
        email: action.payload.email
      }
    case ACTION_TYPES.CHANGE_PASSWORD:
      return{
        ...state,
        password: action.payload.password,
      }
    default:
      return state;
  }
};

export default registerReducer;