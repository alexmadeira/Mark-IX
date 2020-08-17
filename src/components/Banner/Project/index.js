import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Title, Type, Paragraph } from './styles';
import Timer from './Timer';

export default function Project() {
  const activeBanner = useSelector(
    state => state.banner.projects[state.banner.active]
  );
  const loaded = useSelector(state => state.banner.loaded);

  return (
    <Container className={loaded && 'loaded'}>
      <Title>
        {loaded && activeBanner.name}
        <Type> {loaded && activeBanner.description}</Type>
      </Title>
      {loaded && <Timer start={0} />}
      <Paragraph>{loaded && activeBanner.longDescription}</Paragraph>
    </Container>
  );
}
