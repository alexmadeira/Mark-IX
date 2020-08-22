import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { successRequestProject } from './actions';
import types from './types';

export function* getProject({ payload }) {
  const { slug } = payload;
  try {
    const { data } = yield call(api.get, `/project/${slug}`);
    yield put(successRequestProject(data));
  } catch (err) {
    console.tron.log(err);
  }
}

export default all([takeLatest(types.requestProject, getProject)]);
