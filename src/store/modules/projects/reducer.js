import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  loaded: false,
  projects: {},
};

export default function projects(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.successRequestProjects: {
        draft.loaded = true;
        draft.projects = action.payload.projects;
        break;
      }
      case types.requestProjects: {
        draft.loaded = false;
        break;
      }

      default:
    }
  });
}
