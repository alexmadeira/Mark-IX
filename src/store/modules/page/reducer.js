import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  current: null,
  previous: null,
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.setCurrent: {
        draft.current = action.payload.current;
        break;
      }
      case types.setPrevious: {
        draft.previous = action.payload.previous;
        break;
      }

      default:
    }
  });
}
