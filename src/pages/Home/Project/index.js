import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pauseTimer, restartTimer } from '~/store/modules/banner/actions';

import { Container, ProjectContainer } from './styles';

export default function Project() {
  const dispatch = useDispatch();
  const { title, banner } = useSelector(
    state => state.banner.projects[state.banner.active]
  );

  return (
    <Container
      onMouseEnter={() => {
        dispatch(pauseTimer());
      }}
      onMouseLeave={() => {
        dispatch(restartTimer());
      }}
    >
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
