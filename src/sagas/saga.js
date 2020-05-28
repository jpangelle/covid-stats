import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_STATE_DATA_ASYNC,
  GET_STATE_DATA_ERROR,
  GET_STATE_DATA_INIT,
  GET_STATE_DATA_SUCCESS,
} from '../constants';

const getCasesDeaths = () => {
  return axios('/api/get-cases-deaths');
};

function* getStateDataAsync() {
  yield put({ type: GET_STATE_DATA_INIT });
  try {
    const { data } = yield call(getCasesDeaths);
    yield put({ type: GET_STATE_DATA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: GET_STATE_DATA_ERROR, payload: error });
  }
}

export function* watchGetStateDataAsync() {
  yield takeEvery(GET_STATE_DATA_ASYNC, getStateDataAsync);
}
