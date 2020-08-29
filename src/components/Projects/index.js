import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openProjects, closeProjects } from '~/store/modules/menu/actions';
import { requestProjects } from '~/store/modules/projects/actions';

import { useScollDarkMode } from '~/hooks/Scoll';

import Project from './Project';
import {
  Container,
  SquaresMenu,
  SquaresTop,
  SquaresMiddle,
  SquaresBottom,
  ProjectsList,
} from './styles';

export default function Projects() {
  const dispatch = useDispatch();

  const darkMode = useScollDarkMode('1/6');

  const open = useSelector(state => state.menu.projectsOpen);
  const { loaded, projects } = useSelector(state => state.projects);

  const toggleProjects = () => {
    if (open) {
      dispatch(closeProjects());
    } else {
      dispatch(openProjects());
    }
  };

  useEffect(() => {
    dispatch(requestProjects());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <SquaresMenu className={open && 'open'} onClick={toggleProjects}>
        <SquaresTop className={darkMode && 'dark'} />
        <SquaresMiddle className={darkMode && 'dark'} />
        <SquaresBottom className={darkMode && 'dark'} />
      </SquaresMenu>
      <ProjectsList className={open && 'open'}>
        {projects.map(({ id, title, slug, logo, preview }) => (
          <Project
            key={id}
            title={title}
            slug={slug}
            logo={logo}
            preview={preview.title}
          />
        ))}
      </ProjectsList>
    </Container>
  );
}
