import types from './types';

export function requestProjects(limit = 2) {
  return {
    type: types.requestProjects,
    payload: { limit },
  };
}

export function successRequestProjects(projects) {
  return {
    type: types.successRequestProjects,
    payload: { projects },
  };
}

export function setActiveProject(active) {
  return {
    type: types.changeActiveProject,
    payload: { active },
  };
}
export function setRestartTimer(restart) {
  return {
    type: types.setRestartTimer,
    payload: { restart },
  };
}
