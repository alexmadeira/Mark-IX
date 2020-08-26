import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function ImageShimmer({ children, className, h, w, m, flex }) {
  return (
    <Container className={`${className} ${flex && 'flex'}`} h={h} w={w} m={m}>
      {children}
    </Container>
  );
}

ImageShimmer.defaultProps = {
  className: '',
  h: '',
  w: '',
  m: '',
  flex: true,
};

ImageShimmer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  h: PropTypes.string,
  w: PropTypes.string,
  m: PropTypes.string,
  flex: PropTypes.bool,
};

export default ImageShimmer;
