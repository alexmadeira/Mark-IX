import types from './types';

export function requestProject(slug) {
  return {
    type: types.requestProject,
    payload: { slug },
  };
}

export function successRequestProject(project) {
  return {
    type: types.successRequestProject,
    payload: { project },
  };
}
