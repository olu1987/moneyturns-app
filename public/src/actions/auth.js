import jwt from 'jsonwebtoken';
import axios from 'axios';
import apiUrl from '../constants/api';
import setAuthorizationToken from '../utils/authorization_token';
import actionTypes from '../action-types';

export function setCurrentUser(user) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return (dispatch) => {
    return axios.post(`${apiUrl}/user/auth`, data)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
        return res;
      });
  };
}
