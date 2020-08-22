import { combineReducers } from 'redux';

import banner from './banner/reducer';
import loadBar from './loadBar/reducer';
import menu from './menu/reducer';
import page from './page/reducer';
import project from './project/reducer';
import projects from './projects/reducer';

const reducers = combineReducers({
  banner,
  loadBar,
  menu,
  projects,
  project,
  page,
});

export default reducers;
