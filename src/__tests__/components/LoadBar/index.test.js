import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import LoadBar from '~/components/LoadBar';

const mockStore = configureStore([]);

describe('LoadBar Component', () => {
  it('should be rendered LoadBar', () => {
    const store = mockStore({
      loadBar: {
        start: true,
        startContinuous: false,
        complete: false,
        finished: false,
        progress: 0,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <LoadBar />
      </Provider>
    );

    expect(getByTestId('LoadBar')).toBeTruthy();
  });
});
