import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Project from '~/pages/Project';
import history from '~/services/history';
import {
  pauseTimer,
  restartTimer,
  openProject,
  closeProject,
} from '~/store/modules/banner/actions';
import { startContinuousLoadBar } from '~/store/modules/loadBar/actions';

import { Container, ProjectContainer } from './styles';

export default function ProjectPreview() {
  const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;
  const dispatch = useDispatch();
  const activeProject = useSelector(
    state => state.banner.projects[state.banner.active]
  );
  const loaded = useSelector(state => state.banner.loaded);
  const currentPage = useSelector(state => state.page.current);
  const { open } = useSelector(state => state.banner);

  const projectData = {
    params: {
      slug: loaded ? activeProject.slug : '',
    },
  };

  useEffect(() => {
    if (currentPage === 'Home') {
      setTimeout(() => {
        dispatch(closeProject());
      }, 700);
    }
  }, [currentPage, dispatch, openDelay]);

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
          history.push(`/projeto/${activeProject.slug}`);
        }, openDelay);
      }}
    >
      <ProjectContainer>
        <Project match={projectData} />
      </ProjectContainer>
    </Container>
  );
}
