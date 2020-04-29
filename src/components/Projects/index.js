import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  Link,
  Preview,
} from './styles';

export default function Projects() {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
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
          <>
            <Project key={_id}>
              <Link
                to={`/projeto/${slug}`}
                onMouseEnter={() => {
                  videoRef.current.play();
                }}
                onMouseLeave={() => {
                  videoRef.current.pause();
                }}
              >
                <Preview loop autoPlay={false} preload="auto" ref={videoRef}>
                  <source src={preview} />
                </Preview>
                <img src={logo.file} alt={title} />
              </Link>
            </Project>
          </>
        ))}
      </ProjectsList>
    </Container>
  );
}
