import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { successRequestProjects, successRequestProject } from './actions';
import types from './types';

export function* getProjects() {
  try {
    const response = yield call(api.get, `/projects`);
    yield put(successRequestProjects(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}

export function* getProject({ payload }) {
  const { slug } = payload;
  try {
    const { data } = yield call(api.get, `/projects?slug=${slug}`);
    yield put(successRequestProject(data[0]));
  } catch (err) {
    console.tron.log(err);
  }
}

export default all([
  takeLatest(types.requestProjects, getProjects),
  takeLatest(types.requestProject, getProject),
]);
