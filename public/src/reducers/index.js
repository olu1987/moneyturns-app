import { combineReducers } from 'redux';
import savingGroups from './reducer_saving_groups';
import flashMessages from './flash_messages';
import auth from './auth';


const rootReducer = combineReducers({
  savingGroups,
  flashMessages,
  auth,
});

export default rootReducer;
