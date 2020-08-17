import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  pauseTimer,
  restartTimer,
  openProject,
  closeProject,
} from '~/store/modules/banner/actions';
import { startContinuousLoadBar } from '~/store/modules/loadBar/actions';

import { useBanner } from '~/hooks/Banner';
import { usePage } from '~/hooks/Page';
import Project from '~/pages/Project';
import history from '~/services/history';

import { Container, ProjectContainer } from './styles';

const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;

export default function ProjectPreview() {
  const dispatch = useDispatch();
  const page = usePage();

  const currentPage = useSelector(state => state.page.current);
  const { open, loaded, activeProject } = useBanner();

  const projectData = {
    params: {
      slug: loaded ? activeProject.slug : '',
    },
  };

  useEffect(() => {
    if (page.isHome && open) {
      setTimeout(() => {
        dispatch(closeProject());
      }, 900);
    }
  }, [currentPage, dispatch, open, page]);

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
        {loaded ? (
          <Project match={projectData} disabled={!open} />
        ) : (
          'carregando'
        )}
      </ProjectContainer>
    </Container>
  );
}
