import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import { Container, Link } from './styles';

function NextProject() {
  const { anterior, proximo } = useSelector(state => state.project.project);

  return (
    <Container>
      <Link
        to={`/projeto/${anterior && anterior.fields.slug}`}
        onClick={() => scroll.scrollToTop()}
      >
        {anterior && anterior.fields.title}
      </Link>
      <Link
        to={`/projeto/${proximo && proximo.fields.slug}`}
        onClick={() => scroll.scrollToTop()}
      >
        {proximo && proximo.fields.title}
      </Link>
    </Container>
  );
}

export default memo(NextProject);
