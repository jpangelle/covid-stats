import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_STATE_DATA, GET_STATE_DATA_ASYNC } from '../constants';

function* getStateDataAsync() {
  const { data } = yield call(() => axios('/api/get-cases-deaths'));
  yield put({ type: GET_STATE_DATA, stateData: data });
}

export function* watchGetStateDataAsync() {
  yield takeEvery(GET_STATE_DATA_ASYNC, getStateDataAsync);
}
