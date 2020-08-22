import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function Shimmer({ type, h, w, m, flex }) {
  return (
    <Container className={`${type} ${flex && 'flex'}`} h={h} w={w} m={m} />
  );
}

Shimmer.defaultProps = {
  type: '',
  h: '',
  w: '',
  m: '',
  flex: true,
};

Shimmer.propTypes = {
  type: PropTypes.string,
  h: PropTypes.number,
  w: PropTypes.number,
  m: PropTypes.string,
  flex: PropTypes.bool,
};

export default Shimmer;
