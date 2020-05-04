export const data = (
  state = {
    data: [],
    sortOption: 'casesPerCapita',
    sortOrder: 'desc',
  },
  action,
) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'UPDATE_SORT_OPTION':
      if (action.column === 'rank') {
        return state;
      }
      if (state.sortOption === action.column && state.sortOrder === 'desc') {
        return {
          ...state,
          sortOrder: 'asc',
          sortOption: action.column,
        };
      }
      return {
        ...state,
        sortOrder: 'desc',
        sortOption: action.column,
      };
    default:
      return state;
  }
};
