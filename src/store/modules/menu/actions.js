import types from './types';

export function openMenu() {
  return {
    type: types.openMenu,
  };
}
export function closeMenu() {
  return {
    type: types.closeMenu,
  };
}

export function openProjects() {
  return {
    type: types.openProjects,
  };
}
export function closeProjects() {
  return {
    type: types.closeProjects,
  };
}
