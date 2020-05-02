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
