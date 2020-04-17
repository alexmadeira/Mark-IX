import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ProjectContainer } from './styles';

export default function Project() {
  const { title, banner } = useSelector(
    state => state.banner.projects[state.banner.active]
  );

  return (
    <Container>
      <ProjectContainer>
        <h1>{title}</h1>
        <img src={banner} alt="" />
        <img src={banner} alt="" />
        <img src={banner} alt="" />
        <img src={banner} alt="" />
        <img src={banner} alt="" />
      </ProjectContainer>
    </Container>
  );
}
