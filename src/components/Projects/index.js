import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openProjects, closeProjects } from '~/store/modules/menu/actions';
import { requestProjects } from '~/store/modules/projects/actions';

import Scroll from '~/utils/scroll';

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

  const [isDark, setIsDark] = useState(false);

  const toogleMode = useCallback(() => {
    setIsDark(Scroll.darkMode('1/6'));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toogleMode);
    return () => {
      window.removeEventListener('scroll', toogleMode);
    };
  });

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
        <SquaresTop className={isDark && 'dark'} />
        <SquaresMiddle className={isDark && 'dark'} />
        <SquaresBottom className={isDark && 'dark'} />
      </SquaresMenu>
      <ProjectsList className={open && 'open'}>
        {projects.map(({ fields: { id, title, slug, logo, preview } }) => (
          <Project
            key={id}
            title={title}
            slug={slug}
            logo={logo}
            preview={preview}
          />
        ))}
      </ProjectsList>
    </Container>
  );
}
