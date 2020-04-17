import React from 'react';

import Banner from '~/components/Banner';
import Menu from '~/components/Menu';
import Projects from '~/components/Projects';

import Project from './Project';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Menu />
      <Projects />
      <Banner />
      <Project />
    </Container>
  );
}
