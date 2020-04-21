import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  menuOpen: false,
  projectsOpen: false,
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.openMenu: {
        draft.menuOpen = true;
        draft.projectsOpen = false;
        break;
      }
      case types.closeMenu: {
        draft.menuOpen = false;
        break;
      }
      case types.openProjects: {
        draft.projectsOpen = true;
        draft.menuOpen = false;
        break;
      }
      case types.closeProjects: {
        draft.projectsOpen = false;
        break;
      }
      case types.closeAll: {
        draft.projectsOpen = false;
        draft.menuOpen = false;
        break;
      }
      default:
    }
  });
}
