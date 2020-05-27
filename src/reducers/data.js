export const data = (
  state = {
    sortedBy: 'desc',
    sortedColumn: 'casesPerCapita',
    stateData: [],
  },
  action,
) => {
  switch (action.type) {
    case 'GET_STATE_DATA':
      return {
        ...state,
        stateData: action.stateData,
      };
    case 'UPDATE_COLUMN_SORT':
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
