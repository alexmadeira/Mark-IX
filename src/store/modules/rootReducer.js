import { combineReducers } from 'redux';

import banner from './banner/reducer';
import loadBar from './loadBar/reducer';
import menu from './menu/reducer';

const reducers = combineReducers({
  banner,
  loadBar,
  menu,
});

export default reducers;
