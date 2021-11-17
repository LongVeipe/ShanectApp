import {ACTION_TYPES, BASE_URL} from '../../constants';
import callApi from '../../utils/apiCaller';
import axios from 'axios';

export function rememberPassword() {
  return {
    type: ACTION_TYPES.REMEMBER_PASSWORD,
  };
}

export function closeLoginForm(buttonOpacity) {
  return {
    type: ACTION_TYPES.CLOSE_LOGIN_FORM,
    payload: {
      buttonOpacity,
    },
  };
}

export function changeUsername(username) {
  return {
    type: ACTION_TYPES.CHANGE_USERNAME,
    payload: {
      username,
    },
  };
}

export function changePassword(password) {
  return {
    type: ACTION_TYPES.CHANGE_PASSWORD,
    payload: {
      password,
    },
  };
}

export function loginByShanect(username, password) {
  return async dispatch =>
    axios({
      method: 'POST',
      baseURL: BASE_URL,
      url: '/users/login',
      data: {
        username: username,
        password: password,
      },
    })
      .then(res => {
        dispatch({
          type: ACTION_TYPES.LOGIN_BY_SHANECT,
          payload: {
            loginResponse: res.data,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: ACTION_TYPES.ERROR_LOGIN,
          payload: {
            errorLogin: err,
          },
        });
      });
  // callApi('users/login', 'POST', {
  //   username: username,
  //   password: password,
  // }).then(res => {
  //   console.log(res.data)
  //   dispatch({
  //     type: ACTION_TYPES.LOGIN_BY_SHANECT,
  //     payload: {
  //       loginResponse: res.data,
  //     },
  //   });
  // });
}
