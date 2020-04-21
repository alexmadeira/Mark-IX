import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { openProjects, closeProjects } from '~/store/modules/menu/actions';
import { requestProjects } from '~/store/modules/projects/actions';

import {
  Container,
  SquaresMenu,
  SquaresTop,
  SquaresMiddle,
  SquaresBottom,
  ProjectsList,
  Project,
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
      <ProjectsList className={open && 'open'}>
        {projects.map(({ id, title, slug, logo }) => (
          <Project key={id}>
            <Link to={`/projeto/${slug}`}>
              <img src={logo} alt={title} />
            </Link>
          </Project>
        ))}
      </ProjectsList>
    </Container>
  );
}
