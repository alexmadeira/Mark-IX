import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Timer from '~/components/Banner/Project/Timer';

const mockStore = configureStore([]);

const mockedOpen = jest.fn(() => ({
  projects: [],
  active: 0,
  loaded: false,
  restart: true,
  pause: true,
  open: false,
}));

jest.mock('~/components/Shimmer', () => {
  return () => {
    return <dd data-testid="Shimmer" />;
  };
});

jest.mock('~/hooks/Banner', () => ({
  useBanner: () => mockedOpen(),
}));

describe('Banner/Project Component', () => {
  beforeEach(() => {});
  it('should be rendered Banner/Project/Timer', () => {
    const store = mockStore();

    const { getByTestId } = render(
      <Provider store={store}>
        <Timer />
      </Provider>
    );

    expect(getByTestId('Timer')).toBeTruthy();
  });
});
