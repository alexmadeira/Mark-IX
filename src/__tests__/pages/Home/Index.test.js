import React from 'react';

import { render } from '@testing-library/react';

import Home from '~/pages/Home';

const mockCompleteLoadBar = jest.fn();

jest.mock('~/store/modules/loadBar/actions', () => {
  return {
    completeLoadBar: () => jest.fn(),
  };
});
jest.mock('react-redux', () => ({
  useDispatch: () => mockCompleteLoadBar,
}));

jest.mock('~/pages/Home/ProjectPreview', () => {
  return () => {
    return <></>;
  };
});
jest.mock('~/components/Banner', () => () => <></>);

describe('Home Page', () => {
  beforeEach(() => {
    mockCompleteLoadBar.mockClear();
  });
  it('should be rendered home page', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('home-page')).toBeTruthy();
  });
  it('should be finalized load bar', () => {
    render(<Home />);

    expect(mockCompleteLoadBar).toHaveBeenCalled();
  });
});
