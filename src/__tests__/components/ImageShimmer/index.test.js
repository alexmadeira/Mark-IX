import React from 'react';

import { render } from '@testing-library/react';

import ImageShimmer from '~/components/ImageShimmer';

describe('ImageShimmer Component', () => {
  it('should be rendered ImageShimmer', () => {
    const { getByTestId } = render(<ImageShimmer>Content</ImageShimmer>);

    expect(getByTestId('ImageShimmer')).toBeTruthy();
  });
});
