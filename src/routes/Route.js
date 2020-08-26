import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { setCurrent } from '~/store/modules/page/actions';

function RouteWrapper({ component: Component, ...rest }) {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { current } = useSelector(state => state.page);
  if (current !== pathname) {
    dispatch(setCurrent(pathname, 'Route'));
  }
  return <Route component={Component} {...rest} />;
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.shape(),
  ]).isRequired,
};

export default RouteWrapper;
