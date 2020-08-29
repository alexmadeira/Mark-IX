import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

import { Container, ProjectContainer } from './styles';

const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;

const transtionDelay = parseInt(
  process.env.REACT_APP_PAGE_TRANSITION_DELAY,
  10
);

export default function ProjectPreview() {
  const dispatch = useDispatch();
  const history = useHistory();
  const page = usePage();

  const currentPage = useSelector(state => state.page.current);
  const { open, loaded, activeProject } = useBanner();
console.log(open, loaded, activeProject)
  const slug = loaded ? activeProject.fields.slug : '';
  useEffect(() => {
    if (page.isHome && open) {
      setTimeout(() => {
        dispatch(closeProject());
      }, 900);
    }
  }, [currentPage, dispatch, open, page]);

  return (
    <Container
      data-testid="ProjectPreview"
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
        <TransitionGroup>
          <CSSTransition key={slug} timeout={transtionDelay} classNames="page">
            <Project banner={slug} disabled={!open} />
          </CSSTransition>
        </TransitionGroup>
      </ProjectContainer>
    </Container>
  );
}
