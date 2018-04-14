import actionTypes from '../action-types';

function addFlashMessage(message) {
  return {
    type: actionTypes.ADD_FLASH_MESSAGES,
    message,
  };
}

function deleteFlashMessage(id) {
  return {
    type: actionTypes.DELETE_FLASH_MESSAGE,
    id,
  };
}

export {
  addFlashMessage,
  deleteFlashMessage,
};
