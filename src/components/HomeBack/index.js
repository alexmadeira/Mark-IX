import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  setActiveProject,
  startTimer,
  openProject,
} from '~/store/modules/banner/actions';

import { useBanner } from '~/hooks/Banner';
import { usePage } from '~/hooks/Page';

import { Container } from './styles';

function HomeBack({ children, className }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isHome } = usePage();

  const { bannerPosition, inBanner } = useBanner();

  function backHome() {
    if (inBanner) {
      dispatch(setActiveProject(bannerPosition));
      dispatch(startTimer(true));
      dispatch(openProject());
    }

    history.push('/');
  }

  return (
    <Container
      type="button"
      className={`${className} ${isHome && 'hidden'}`}
      data-testid="HomeBack"
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
