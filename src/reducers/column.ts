import { createReducer } from 'typesafe-actions';
import { UPDATE_COLUMN_SORT } from '../constants';

interface Action {
  payload: {
    column: string;
  };
  type: string;
}

interface State {
  sortedBy: string;
  sortedColumn: string;
}

const initialState = {
  sortedBy: 'desc',
  sortedColumn: 'casesPerCapita',
};

export const columnReducer = createReducer(initialState).handleType(
  UPDATE_COLUMN_SORT,
  (state: State, action: Action) => {
    if (action.payload.column === 'rank') {
      return state;
    }
    if (
      state.sortedColumn === action.payload.column &&
      state.sortedBy === 'desc'
    ) {
      return {
        ...state,
        sortedBy: 'asc',
        sortedColumn: action.payload.column,
      };
    }
    return {
      ...state,
      sortedBy: 'desc',
      sortedColumn: action.payload.column,
    };
  },
);
