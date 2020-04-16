import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { successRequestProjects } from './actions';
import types from './types';

export function* getProjects({ payload }) {
  const { limit } = payload;
  try {
    const response = yield call(api.get, `/projects?_limit=${limit}`);
    yield put(successRequestProjects(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}
export default all([takeLatest(types.requestProjects, getProjects)]);
