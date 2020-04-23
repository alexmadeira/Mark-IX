import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import history from '~/services/history';
import {
  setActiveProject,
  startTimer,
  requestProjects,
  openProject,
} from '~/store/modules/banner/actions';

import { Container } from './styles';

function HomeBack({ projectId }) {
  const dispatch = useDispatch();
  const numberBanners = process.env.REACT_APP_NUMBER_BANNERS;

  const bannerProjects = useSelector(state => state.banner.projects);

  const inBanner = bannerProjects.find(
    bannerProject => bannerProject.id === projectId
  );

  const activeKey = bannerProjects.indexOf(inBanner);

  function backHome() {
    dispatch(setActiveProject(activeKey));
    dispatch(startTimer(true));
    dispatch(openProject());
    history.push('/');
  }
  useEffect(() => {
    if (!bannerProjects.length) {
      dispatch(requestProjects(numberBanners));
    }
  }, [bannerProjects, dispatch, numberBanners]);

  return projectId !== false ? (
    <Container
      type="button"
      onClick={() => {
        backHome();
      }}
    >
      Home
    </Container>
  ) : null;
}

HomeBack.defaultProps = {
  projectId: false,
};

HomeBack.propTypes = {
  projectId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    PropTypes.string,
  ]),
};
export default HomeBack;
