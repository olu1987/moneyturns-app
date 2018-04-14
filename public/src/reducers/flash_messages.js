import shortid from 'shortid';
import actionTypes from '../action-types';
import { getArrayElementIndexById } from '../utils';

export default (state = [], action = {}) => {
  let index;
  switch (action.type) {
    case actionTypes.ADD_FLASH_MESSAGES:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text,
        },
      ];
    case actionTypes.DELETE_FLASH_MESSAGE:
      index = getArrayElementIndexById(state, action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
        
    default: return state;
  }
};

