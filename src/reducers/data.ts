import { createReducer } from 'typesafe-actions';
import { getStateDataAsync } from '../actions';

interface Action {
  payload: USStateDataArray | Error;
  type: string;
}

interface State {
  error: Error;
  loading: boolean;
  stateData: USStateDataArray;
}

const initialState = {
  error: undefined,
  loading: true,
  stateData: [],
};

export const dataReducer = createReducer(initialState)
  .handleAction(getStateDataAsync.request, (state: State) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getStateDataAsync.success, (state: State, action: Action) => ({
    ...state,
    error: undefined,
    loading: false,
    stateData: action.payload,
  }))
  .handleAction(getStateDataAsync.failure, (state: State, action: Action) => ({
    ...state,
    error: action.payload,
    loading: false,
  }));
