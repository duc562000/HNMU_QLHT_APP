import {put, takeLatest} from 'redux-saga/effects';
// @ts-ignore

import {LOGIN, UPDATE_INFOR} from '../actions/actionTypes';

function* updateUser(action) {
  try {
    yield put({type: LOGIN, data: 'asdsad'});
  } catch (error) {}
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_INFOR, updateUser);
}
