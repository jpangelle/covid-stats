import { combineReducers } from 'redux';
import { column } from './column';
import { data } from './data';

export default combineReducers({
  column,
  data,
});
