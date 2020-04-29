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
    <Container>
      <Title>
        {loaded && activeBanner.title}
        <Type> {loaded && activeBanner.type}</Type>
      </Title>
      <Timer start={0} />
      <Paragraph>{loaded && activeBanner.description}</Paragraph>
    </Container>
  );
}
