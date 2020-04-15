import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  projects: [{ id: null, title: null, type: null, description: null }],
  active: 0,
  loaded: false,
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.successRequestProjects: {
        draft.loaded = true;
        draft.projects = action.payload.projects;
        break;
      }
      case types.changeActiveProject: {
        draft.active = action.payload.active;
        break;
      }

      default:
    }
  });
}
