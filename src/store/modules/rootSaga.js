import { all } from 'redux-saga/effects';

import banner from './banner/sagas';

export default function* rootSaga() {
  yield all([banner]);
}
