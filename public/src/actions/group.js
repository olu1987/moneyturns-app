import axios from 'axios';
import actionTypes from '../action-types';
import apiUrl from '../constants/api';

const createUrl = `${apiUrl}/saving-group/create`;
const deleteUrl = `${apiUrl}/saving-group/delete`;
const editUrl = `${apiUrl}/saving-group/edit`;

function createSavingGroup(data) {
  return  (dispatch) => {
    return axios.post(createUrl, data);
  };
}

function editSavingGroup(data) {
  return  (dispatch) => {
    return axios.post(editUrl, data);
  };
}

function deleteSavingGroup(data) {
  return  (dispatch) => {
    return axios.post(deleteUrl, data);
  };
}

export {
  createSavingGroup,
  editSavingGroup,
  deleteSavingGroup,
};