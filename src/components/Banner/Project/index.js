import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Title, Paragraph } from './styles';
import Timer from './Timer';

export default function Project() {
  const { title, type, description } = useSelector(
    state => state.banner.projects[state.banner.active]
  );

  return (
    <Container>
      <Title>
        {title} {type}
      </Title>
      <Timer />
      <Paragraph>{description}</Paragraph>
    </Container>
  );
}
