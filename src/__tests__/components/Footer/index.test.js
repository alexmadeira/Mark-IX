import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Footer from '~/components/Footer';

const mockedDarkMode = jest.fn();

jest.mock('~/utils/scroll', () => ({
  darkMode: on => mockedDarkMode(on),
}));

describe('Footer Component', () => {
  beforeEach(() => {
    mockedDarkMode.mockClear();
  });

  it('should be rendered Footer', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('Footer')).toBeTruthy();
  });

  it('should be called DarkMode Function', () => {
    render(<Footer />);

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(mockedDarkMode).toBeCalledWith('1/19');
  });
});
