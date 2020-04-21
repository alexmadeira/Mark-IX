import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  projects: [],
  project: {},
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.successRequestProjects: {
        draft.projects = action.payload.projects;
        break;
      }
      case types.successRequestProject: {
        draft.project = action.payload.project;
        break;
      }

      default:
    }
  });
}
