import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { combineAsset } from '~/utils/contentful';

import { successRequestProjects } from './actions';
import types from './types';

export function* getProjects() {
  try {
    const { data } = yield call(
      api.get,
      `/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}&content_type=projeto`
    );
    yield put(successRequestProjects(combineAsset(data)));
  } catch (err) {
    // console.tron.log(err);
  }
}

export default all([takeLatest(types.requestProjects, getProjects)]);
