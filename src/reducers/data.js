import {
  GET_STATE_DATA_ERROR,
  GET_STATE_DATA_INIT,
  GET_STATE_DATA_SUCCESS,
} from '../constants';

const initialState = {
  error: undefined,
  loading: true,
  stateData: [],
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_DATA_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_STATE_DATA_SUCCESS:
      return {
        ...state,
        error: undefined,
        loading: false,
        stateData: action.payload,
      };
    case GET_STATE_DATA_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
