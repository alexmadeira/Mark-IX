import types from './types';

export function setCurrent(current) {
  return {
    type: types.setCurrent,
    payload: { current },
  };
}

export function setPrevious(previous) {
  return {
    type: types.setPrevious,
    payload: { previous },
  };
}
