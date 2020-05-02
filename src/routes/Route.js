import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import { setCurrent } from '~/store/modules/page/actions';

import history from '~/services/history';

function RouteWrapper({ component: Component, ...rest }) {
  const { pathname } = history.location;

  const dispatch = useDispatch();
  const { current } = useSelector(state => state.page);

  if (current !== pathname) {
    dispatch(setCurrent(pathname, 'Route'));
  }
  return <Route component={Component} {...rest} />;
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
};

export default RouteWrapper;
