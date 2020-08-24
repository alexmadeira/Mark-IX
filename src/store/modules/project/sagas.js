import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { combine } from '~/utils/contentful';

import { successRequestProject } from './actions';
import types from './types';

export function* getProject({ payload }) {
  const { slug } = payload;
  try {
    const { data } = yield call(
      api.get,
      `/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}&content_type=projeto&fields.slug=${slug}`
    );
    const project = combine(data);
    yield put(successRequestProject(project[0]));
  } catch (err) {
    // console.tron.log(err);
  }
}
export default all([takeLatest(types.requestProject, getProject)]);
