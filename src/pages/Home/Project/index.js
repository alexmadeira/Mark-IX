import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';
import {
  pauseTimer,
  restartTimer,
  openProject,
} from '~/store/modules/banner/actions';
import { startContinuousLoadBar } from '~/store/modules/loadBar/actions';

import { Container, ProjectContainer } from './styles';

export default function Project() {
  const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;
  const dispatch = useDispatch();
  const { title, banner, slug } = useSelector(
    state => state.banner.projects[state.banner.active]
  );

  const { open } = useSelector(state => state.banner);

  return (
    <Container
      className={open && 'open'}
      onMouseEnter={() => {
        dispatch(pauseTimer());
      }}
      onMouseLeave={() => {
        dispatch(restartTimer());
      }}
      onClick={() => {
        dispatch(startContinuousLoadBar());
        dispatch(openProject());
        setTimeout(() => {
          history.push(`/projeto/${slug}`);
        }, openDelay);
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
