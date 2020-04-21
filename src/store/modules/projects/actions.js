import types from './types';

export function requestProjects() {
  return {
    type: types.requestProjects,
  };
}

export function successRequestProjects(projects) {
  return {
    type: types.successRequestProjects,
    payload: { projects },
  };
}
