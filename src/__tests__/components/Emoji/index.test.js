import React from 'react';

import { render } from '@testing-library/react';

import Emoji from '~/components/Emoji';

describe('Emoji Component', () => {
  it('should be rendered Emoji', () => {
    const { getByTestId } = render(<Emoji />);

    expect(getByTestId('Emoji')).toBeTruthy();
  });
});
