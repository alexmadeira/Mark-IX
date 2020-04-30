import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openProjects, closeProjects } from '~/store/modules/menu/actions';
import { requestProjects } from '~/store/modules/projects/actions';

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

  const open = useSelector(state => state.menu.projectsOpen);
  const { projects } = useSelector(state => state.projects);

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
  return (
    <Container>
      <SquaresMenu className={open && 'open'} onClick={toggleProjects}>
        <SquaresTop />
        <SquaresMiddle />
        <SquaresBottom />
      </SquaresMenu>
      <ProjectsList className={!open && 'open'}>
        {projects.map(({ _id, title, slug, logo, preview }) => (
          <Project
            key={_id}
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
