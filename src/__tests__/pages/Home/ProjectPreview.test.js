import React from 'react';

import { render } from '@testing-library/react';

import ProjectPreview from '~/pages/Home/ProjectPreview';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => ({
    state: {
      page: {
        current: '/',
      },
    },
  }),
}));

jest.mock('~/hooks/Page', () => ({
  usePage: () => ({
    isHome: true,
  }),
}));

jest.mock('~/hooks/Banner', () => ({
  useBanner: () => ({
    open: true,
    loaded: true,
    activeProject: { slug: '' },
  }),
}));

jest.mock('~/pages/Project', () => () => <></>);

describe('Home Page: ProjectPreview', () => {
  it('should be rendered home page: ProjectPreview', () => {
    const { getByTestId } = render(<ProjectPreview />);

    expect(getByTestId('ProjectPreview')).toBeTruthy();
  });
});
