import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveProject, startTimer } from '~/store/modules/banner/actions';

import { Container, Button, Step, Next, Prev } from './styles';

export default function Nav() {
  const dispatch = useDispatch();

  const { active, projects } = useSelector(state => state.banner);
  const totalProjects = useSelector(state =>
    state.banner.projects.length.toString().padStart(2, '0')
  );

  const activeProject = useSelector(state =>
    (state.banner.active + 1).toString().padStart(2, '0')
  );

  function changeBanner(banner) {
    dispatch(setActiveProject(banner));
    dispatch(startTimer(true));
  }

  function load(direction) {
    const total = projects.length - 1;
    switch (direction) {
      case 'next':
        return active + 1 > total ? 0 : active + 1;
      case 'prev':
        return active - 1 < 0 ? total : active - 1;
      default:
        return active;
    }
  }
  return (
    <Container>
      <Button
        onClick={() => {
          changeBanner(load('next'));
        }}
      >
        <Next />
      </Button>
      <Step>
        <strong> {activeProject}/</strong>
        {totalProjects}
      </Step>
      <Button
        onClick={() => {
          changeBanner(load('prev'));
        }}
      >
        <Prev />
      </Button>
    </Container>
  );
}
