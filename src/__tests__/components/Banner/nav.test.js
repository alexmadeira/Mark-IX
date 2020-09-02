import React from 'react';
import { Provider } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Nav from '~/components/Banner/Nav';

const mockStore = configureStore([]);

describe('Banner/Nav Component', () => {
  beforeEach(() => {});

  it('should be rendered Banner/Nav', () => {
    const store = mockStore({ banner: { projects: [], active: 0 } });

    const { getByTestId } = render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );

    expect(getByTestId('Nav')).toBeTruthy();
  });

  it('should be possible change to next project', () => {
    const store = mockStore({
      banner: { projects: ['banner 1', 'banner 2', 'banner 3'], active: 0 },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );

    fireEvent.click(getByTestId('next'));

    const actions = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('@banner/CHANGE_ACTIVE_PROJECT');
    expect(actions[0].payload).toEqual({ active: 1 });
    expect(actions[1].type).toEqual('@banner/START_TIMER');
  });

  it('should be possible change to prev project', () => {
    const store = mockStore({
      banner: { projects: ['banner 1', 'banner 2', 'banner 3'], active: 0 },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );

    fireEvent.click(getByTestId('prev'));

    const actions = store.getActions();

    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('@banner/CHANGE_ACTIVE_PROJECT');
    expect(actions[0].payload).toEqual({ active: 2 });
    expect(actions[1].type).toEqual('@banner/START_TIMER');
  });
});
