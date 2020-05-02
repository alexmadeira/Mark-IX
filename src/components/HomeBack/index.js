import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setActiveProject,
  startTimer,
  requestProjects,
  openProject,
} from '~/store/modules/banner/actions';

import useBanner from '~/hooks/useBanner';
import history from '~/services/history';

import { Container } from './styles';

function HomeBack() {
  const dispatch = useDispatch();
  const { bannerPosition } = useBanner();

  const numberBanners = process.env.REACT_APP_NUMBER_BANNERS;

  const bannerProjects = useSelector(state => state.banner.projects);

  function backHome() {
    dispatch(setActiveProject(bannerPosition));
    dispatch(startTimer(true));
    dispatch(openProject());
    history.push('/');
  }

  useEffect(() => {
    if (!bannerProjects.length) {
      dispatch(requestProjects(numberBanners));
    }
  }, [bannerProjects, dispatch, numberBanners]);

  return (
    <Container
      type="button"
      onClick={() => {
        backHome();
      }}
    >
      Home
    </Container>
  );
}

export default HomeBack;
