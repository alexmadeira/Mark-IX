import types from './types';

export function requestProjects(limit = 2) {
  console.log('requestProjects')
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
export function startTimer(restart) {
  return {
    type: types.startTimer,
    payload: { restart },
  };
}
export function pauseTimer() {
  return {
    type: types.pauseTimer,
  };
}
export function restartTimer() {
  return {
    type: types.restartTimer,
  };
}
export function openProject() {
  return {
    type: types.openProject,
  };
}
export function closeProject() {
  return {
    type: types.closeProject,
  };
}
