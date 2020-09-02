import React from 'react';

import { render } from '@testing-library/react';

import Banner from '~/components/Banner';

const mockedOpen = jest.fn(() => ({ open: true }));

jest.mock('~/hooks/Banner', () => ({
  useBanner: () => mockedOpen(),
}));

jest.mock('~/components/Banner/Project', () => {
  return () => {
    return <></>;
  };
});
jest.mock('~/components/Banner/Nav', () => {
  return () => {
    return <></>;
  };
});

describe('Banner components', () => {
  beforeEach(() => {
    mockedOpen.mockClear();
  });
  it('should be rendered Banner', () => {
    const { getByTestId } = render(<Banner />);

    expect(getByTestId('Banner')).toBeTruthy();
  });

  it('should be open Banner', async () => {
    mockedOpen.mockImplementationOnce(() => ({ open: false }));
    const { container } = render(<Banner />);

    expect(container.firstChild.classList.contains('open')).toBe(false);
  });
});
