import { action, createAsyncAction } from 'typesafe-actions';
import {
  GET_STATE_DATA_FAILURE,
  GET_STATE_DATA_REQUEST,
  GET_STATE_DATA_SUCCESS,
  UPDATE_COLUMN_SORT,
} from '../constants';

const getStateDataAsync = createAsyncAction(
  GET_STATE_DATA_REQUEST,
  GET_STATE_DATA_SUCCESS,
  GET_STATE_DATA_FAILURE,
)<boolean, USStateDataArray, Error>();

const getStateData = () => action(GET_STATE_DATA_REQUEST);

const updateSortColumn = (column?: string) =>
  action(UPDATE_COLUMN_SORT, { column });

export { getStateData, getStateDataAsync, updateSortColumn };
