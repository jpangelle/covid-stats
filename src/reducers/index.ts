import { combineReducers } from 'redux';
import { columnReducer } from './column';
import { dataReducer } from './data';

export default combineReducers({
  column: columnReducer,
  data: dataReducer,
});
