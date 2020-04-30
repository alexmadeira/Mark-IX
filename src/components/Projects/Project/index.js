import React, { useRef } from 'react';

import PropTypes from 'prop-types';

import { Container, Preview, Link, Logo } from './styles';

function Project({ title, slug, logo, preview }) {
  const videoRef = useRef(null);

  return (
    <Container>
      <Link
        to={`/projeto/${slug}`}
        onMouseEnter={() => {
          videoRef.current.play();
        }}
        onMouseLeave={() => {
          videoRef.current.pause();
        }}
      >
        <Preview
          loop
          autoPlay={false}
          preload="auto"
          muted="muted"
          ref={videoRef}
        >
          <source src={preview} />
        </Preview>
        <Logo src={logo.file} alt={title} />
      </Link>
    </Container>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  logo: PropTypes.shape().isRequired,
  preview: PropTypes.string.isRequired,
};

export default Project;
