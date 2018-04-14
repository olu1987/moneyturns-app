import axios from 'axios';
import actionTypes from '../action-types';
import apiUrl from '../constants/api';

function fetchAllSavingGroups() {
  const url = `${apiUrl}/saving-group`;
  const request = axios.get(url);

  return {
    type: actionTypes.FETCH_ALL_SAVING_GROUPS,
    payload: request,
  };
}


function userSignupRequest(userData) {
  return ( dispatch ) => {
    return axios.post(`${apiUrl}/create-user`, userData);
  }
}

function isUserExists(identifier) {
  return (dispatch) => {
    return axios.get(`${apiUrl}/get-user/${identifier}`);
  }
}

export {
  fetchAllSavingGroups,
  userSignupRequest,
  isUserExists,
};
