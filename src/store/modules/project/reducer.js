import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  loaded: false,
  project: {},
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.successRequestProject: {
        draft.project = action.payload.project;
        draft.loaded = true;
        break;
      }

      default:
    }
  });
}
