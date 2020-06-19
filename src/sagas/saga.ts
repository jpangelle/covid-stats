import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getStateDataAsync } from '../actions';

const getCasesDeaths = () => {
  return axios('/api/get-cases-deaths');
};

function* getStateData() {
  try {
    const { data } = yield call(getCasesDeaths);
    yield put(getStateDataAsync.success(data));
  } catch (error) {
    yield put(getStateDataAsync.failure(error));
  }
}

export function* watchGetStateDataAsync() {
  yield takeEvery(getStateDataAsync.request, getStateData);
}
