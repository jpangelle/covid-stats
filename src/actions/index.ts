import { GET_STATE_DATA_ASYNC, UPDATE_COLUMN_SORT } from '../constants';

const getStateData = () => ({
  type: GET_STATE_DATA_ASYNC,
});

const updateSortColumn = (column: string | undefined) => ({
  column,
  type: UPDATE_COLUMN_SORT,
});

export { getStateData, updateSortColumn };
