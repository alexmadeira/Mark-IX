import React from 'react';
import { Provider } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import HomeBack from '~/components/HomeBack';

const mockStore = configureStore([]);

const mockedBanner = jest.fn(() => ({ bannerPosition: 0, inBanner: true }));
const mockedPage = jest.fn(() => ({ isHome: true }));
const mockedPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: path => mockedPush(path) }),
}));

jest.mock('~/hooks/Banner', () => ({
  useBanner: () => mockedBanner(),
}));

jest.mock('~/hooks/Page', () => ({
  usePage: () => mockedPage(),
}));

describe('HomeBack Component', () => {
  beforeEach(() => {
    mockedBanner.mockClear();
  });

  it('should be rendered HomeBack', () => {
    const store = mockStore({ banner: { projects: ['projeto'] } });

    const { getByTestId } = render(
      <Provider store={store}>
        <HomeBack>Back</HomeBack>
      </Provider>
    );

    expect(getByTestId('HomeBack')).toBeTruthy();
  });

  it('should be back to home if Click', () => {
    const store = mockStore({ banner: { projects: ['projeto'] } });

    const { getByTestId } = render(
      <Provider store={store}>
        <HomeBack>Back</HomeBack>
      </Provider>
    );

    fireEvent.click(getByTestId('HomeBack'));
    expect(mockedPush).toBeCalledWith('/');
  });

  it('should be return to the Banner of the project is Banner', () => {
    const store = mockStore({ banner: { projects: ['projeto'] } });
    mockedBanner.mockImplementationOnce(() => ({
      bannerPosition: 2,
      inBanner: true,
    }));

    const { getByTestId } = render(
      <Provider store={store}>
        <HomeBack>Back</HomeBack>
      </Provider>
    );

    fireEvent.click(getByTestId('HomeBack'));
    const actions = store.getActions();

    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('@banner/CHANGE_ACTIVE_PROJECT');
    expect(actions[0].payload).toEqual({ active: 2 });

    expect(actions[1].type).toEqual('@banner/OPEN_PROJECT');
  });

  it('not should be return to the Banner of the project is not in Banner', () => {
    const store = mockStore({ banner: { projects: ['projeto'] } });
    mockedBanner.mockImplementationOnce(() => ({
      bannerPosition: 2,
      inBanner: false,
    }));

    const { getByTestId } = render(
      <Provider store={store}>
        <HomeBack>Back</HomeBack>
      </Provider>
    );

    fireEvent.click(getByTestId('HomeBack'));
    const actions = store.getActions();

    expect(actions.length).toBe(0);
  });
});
