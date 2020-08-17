import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestProjects } from '~/store/modules/banner/actions';

const numberBanners = process.env.REACT_APP_NUMBER_BANNERS;

export const useBanner = () => {
  const dispatch = useDispatch();

  const banner = useSelector(state => state.banner);

  const { project } = useSelector(state => state.projects);

  useEffect(() => {
    if (!banner.loaded && !banner.loading) {
      dispatch(requestProjects(numberBanners, 'useBanner'));
    }
  }, [banner, dispatch]);

  const inBanner = banner.projects.find(
    bannerProject => bannerProject.id === project.id
  );

  const activeProject = useSelector(
    state => state.banner.projects[state.banner.active]
  );

  const bannerPosition = banner.projects.indexOf(inBanner);

  return { inBanner: !!inBanner, bannerPosition, activeProject, ...banner };
};
