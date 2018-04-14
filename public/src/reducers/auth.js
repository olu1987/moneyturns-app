import isEmpty from 'lodash/isEmpty';
import actionTypes from '../action-types';

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default: return state;
  }
};
