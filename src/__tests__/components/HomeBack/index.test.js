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
  beforeEach(() => {});

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
});
