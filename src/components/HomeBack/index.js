import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  setActiveProject,
  startTimer,
  requestProjects,
  openProject,
} from '~/store/modules/banner/actions';

import { useBanner } from '~/hooks/Banner';
import { usePage } from '~/hooks/Page';

import { Container } from './styles';

const numberBanners = process.env.REACT_APP_NUMBER_BANNERS;

function HomeBack({ children, className }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const page = usePage();

  const { bannerPosition, inBanner } = useBanner();

  const bannerProjects = useSelector(state => state.banner.projects);
  function backHome() {
    if (inBanner) {
      dispatch(setActiveProject(bannerPosition));
      dispatch(startTimer(true));
      dispatch(openProject());
    }

    history.push('/');
  }

  useEffect(() => {
    if (!bannerProjects.length) {
      dispatch(requestProjects(numberBanners));
    }
  }, [bannerProjects, dispatch]);

  return (
    <Container
      type="button"
      className={`${className} ${page.isHome && 'hidden'}`}
      onClick={() => {
        backHome();
      }}
    >
      {children}
    </Container>
  );
}

HomeBack.defaultProps = {
  className: '',
};

HomeBack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default HomeBack;
