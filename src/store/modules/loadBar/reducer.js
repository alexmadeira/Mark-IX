import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  start: true,
  startContinuous: false,
  complete: false,
  finished: false,
  progress: 0,
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.start: {
        draft.start = true;
        draft.startContinuous = false;
        draft.complete = false;
        draft.finished = false;
        draft.progress = 0;
        break;
      }
      case types.startContinuous: {
        draft.start = false;
        draft.startContinuous = true;
        draft.complete = false;
        draft.finished = false;
        break;
      }
      case types.complete: {
        draft.start = false;
        draft.startContinuous = false;
        draft.complete = true;
        draft.finished = false;
        break;
      }
      case types.finished: {
        draft.start = false;
        draft.startContinuous = false;
        draft.complete = false;
        draft.finished = true;
        draft.progress = 0;
        break;
      }
      case types.addProgress: {
        draft.progress = action.payload.progress;
        break;
      }

      default:
    }
  });
}
