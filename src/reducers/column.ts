import { UPDATE_COLUMN_SORT } from '../constants';

interface Action {
  column: string;
  type: string;
}

const initialState = {
  sortedBy: 'desc',
  sortedColumn: 'casesPerCapita',
};

export const column = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_COLUMN_SORT:
      if (action.column === 'rank') {
        return state;
      }
      if (state.sortedColumn === action.column && state.sortedBy === 'desc') {
        return {
          ...state,
          sortedBy: 'asc',
          sortedColumn: action.column,
        };
      }
      return {
        ...state,
        sortedBy: 'desc',
        sortedColumn: action.column,
      };
    default:
      return state;
  }
};
