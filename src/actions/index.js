import axios from 'axios';

const GET_DATA = 'GET_DATA';
const UPDATE_SORT_OPTION = 'UPDATE_SORT_OPTION';

const getData = () => {
  return async dispatch => {
    const { data } = await axios('/api/get-cases-deaths');
    return dispatch({
      type: GET_DATA,
      data,
    });
  };
};

const updateSortOption = column => ({
  type: UPDATE_SORT_OPTION,
  column,
});

export { GET_DATA, getData, UPDATE_SORT_OPTION, updateSortOption };
