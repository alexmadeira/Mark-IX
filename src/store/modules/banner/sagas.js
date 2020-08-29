import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import Contentful from '~/utils/contentful';

import { successRequestProjects } from './actions';
import types from './types';

export function* getProjects({ payload }) {
  const { limit } = payload;
  console.log(payload)
  try {
    const { data } = yield call(
      api.get,
      `/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}&content_type=projeto&limit=${limit}`
    );
      console.log(data)

console.log('banner saga ',Contentful(data).combine())
    yield put(successRequestProjects(Contentful(data).combine()));
  } catch (err) {
    // console.tron.log(err);
  }
}
export default all([takeLatest(types.requestProjects, getProjects)]);
