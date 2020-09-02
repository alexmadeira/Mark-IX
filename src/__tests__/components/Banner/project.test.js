import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Project from '~/components/Banner/Project';

const mockStore = configureStore([]);

jest.mock('~/components/Shimmer', () => {
  return () => {
    return <dd data-testid="Shimmer" />;
  };
});
jest.mock('~/components/Banner/Project/Timer', () => {
  return () => {
    return <></>;
  };
});

describe('Banner/Project Component', () => {
  beforeEach(() => {});
  it('should be rendered Banner/Project', () => {
    const store = mockStore({
      banner: { projects: [], active: 0, loaded: false },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Project />
      </Provider>
    );

    expect(getByTestId('Project')).toBeTruthy();
  });

  it('should be show Shimmer if not loaded Project', () => {
    const store = mockStore({
      banner: { projects: [], active: 0, loaded: false },
    });

    const { getAllByTestId } = render(
      <Provider store={store}>
        <Project />
      </Provider>
    );

    expect(getAllByTestId('Shimmer')).toBeTruthy();
  });

  it('not should be show Shimmer if loaded Project', () => {
    const store = mockStore({
      banner: {
        projects: [
          {
            fields: {
              title: 'Project name',
              type: 'Project Type',
              shortDescription: 'Project short description',
            },
          },
        ],
        active: 0,
        loaded: true,
      },
    });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Project />
      </Provider>
    );

    expect(queryByTestId('Shimmer')).toBeFalsy();
  });

  it('should be restart Timer if loading Project', () => {
    const store = mockStore({
      banner: {
        projects: [
          {
            fields: {
              title: 'Project name',
              type: 'Project Type',
              shortDescription: 'Project short description',
            },
          },
        ],
        active: 0,
        loaded: true,
      },
    });

    render(
      <Provider store={store}>
        <Project />
      </Provider>
    );

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toEqual('@banner/RESTART_TIMER');
  });
});
