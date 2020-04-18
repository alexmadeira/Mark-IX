import { combineReducers } from 'redux';

import banner from './banner/reducer';
import loadBar from './loadBar/reducer';

const reducers = combineReducers({
  banner,
  loadBar,
});

export default reducers;
