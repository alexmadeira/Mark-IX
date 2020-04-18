import types from './types';

export function startLoadBar() {
  return {
    type: types.start,
  };
}
export function startContinuousLoadBar() {
  return {
    type: types.startContinuous,
  };
}
export function completeLoadBar() {
  return {
    type: types.complete,
  };
}
export function finishedLoadBar() {
  return {
    type: types.finished,
  };
}
export function addProgressLoadBar(progress) {
  return {
    type: types.addProgress,
    payload: { progress },
  };
}
