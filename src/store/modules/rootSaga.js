import { all } from 'redux-saga/effects';

import banner from './banner/sagas';
import projects from './projects/sagas';

export default function* rootSaga() {
  yield all([banner, projects]);
}
