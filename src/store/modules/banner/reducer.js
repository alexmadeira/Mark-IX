import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  projects: [],
  active: 0,
  loaded: false,
  loading: false,
  restart: true,
  pause: true,
  open: false,
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.requestProjects: {
        draft.loading = true;
        break;
      }
      case types.successRequestProjects: {
        draft.projects = action.payload.projects;
        draft.loaded = true;
        draft.loading = false;
        break;
      }
      case types.changeActiveProject: {
        draft.active = action.payload.active;
        draft.restart = true;
        break;
      }
      case types.startTimer: {
        draft.restart = action.payload.restart;
        break;
      }
      case types.pauseTimer: {
        draft.pause = true;
        break;
      }
      case types.restartTimer: {
        draft.pause = false;
        break;
      }
      case types.openProject: {
        draft.open = true;
        draft.pause = true;
        break;
      }
      case types.closeProject: {
        draft.open = false;
        draft.pause = false;
        break;
      }

      default:
    }
  });
}
